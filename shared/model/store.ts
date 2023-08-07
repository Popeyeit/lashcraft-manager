import { getArtists } from "./../../widgets/Artist/api/getArtists";
import { getTransactionByDate } from "./../../features/DatePicker/api/getTransactionByDate";
import { getSalaries } from "@/features/CashierFeatures/idex";
import { signInFetch } from "@/features/SignIn/api/auth";
import { authFormData } from "@/features/SignIn/model/types";
import { create } from "zustand";
import { updateSalary } from "../api/updateSalary";
import { SalaryType, TransactionType, UpdateSalaryTypes } from "./types";
import { DateTypes } from "@/features/DatePicker/model/types";
import { TransactionDataType } from "@/features/TransactionForm/model/types";
import { createTransaction } from "@/features/TransactionForm/api/createTransaction";
import { weekAgo } from "../lib/functions/dates";
import { responseArtists } from "@/widgets/Artist/model/types";
import { SalaryStatusType } from "@/features/CashierFeatures/lib/types";
import { updateSalaryStatus } from "@/features/CashierFeatures/api/updateSalaryStatus";
import { createSalary } from "@/features/CashierFeatures/api/createSalary";

export type ArtistType = {
  login: string;
  percent: number;
  id: number;
  birthDay: Date;
};

export type userTypes = {
  user: {
    login: string;
    id: number;
    role: string;
  };
  artist: ArtistType;
  transactions: TransactionType[];
  salaries: SalaryType[];
  fetchUser: (formData: authFormData) => Promise<any>;
  getUser: () => void;
  logOut: () => void;
  updateStoreSalary: (data: UpdateSalaryTypes) => Promise<any>;
  createStoreTransaction: (data: TransactionDataType) => Promise<any>;
  getTransactions: (data: DateTypes) => Promise<any>;
  changeArtist: (data: responseArtists) => Promise<void>;
  updateStoreSalaryStatus: (data: SalaryStatusType) => Promise<void>;
  createSalary: (id: number) => Promise<SalaryType | undefined>;
};

const initState = {
  login: "",
  id: 0,
  role: "",
};

const initArtistState = {
  login: "",
  id: 0,
  percent: 0,
  birthDay: new Date(),
};

export const useUser = create<userTypes>()((set) => ({
  user: initState,
  artist: initArtistState,
  transactions: [],
  salaries: [],
  fetchUser: async (formData) => {
    if (formData) {
      try {
        const fetchedUser = await signInFetch(formData);
        const salaries = await getSalaries(fetchedUser.id);
        const currentDate = new Date().toISOString();
        const transactions = await getTransactionByDate({
          artistId: fetchedUser.id,
          startDate: currentDate,
          endDate: weekAgo(),
        });
        if (fetchedUser) {
          const user = {
            login: fetchedUser?.login,
            password: fetchedUser?.password,
            id: fetchedUser?.id,
            role: fetchedUser?.role,
          };
          const artist = {
            login: fetchedUser?.login,
            birthDay: fetchedUser?.birthDay,
            percent: fetchedUser?.percent,
            id: fetchedUser?.id,
          };
          set({
            user,
            artist,
            salaries,
            transactions,
          });
          localStorage.setItem(
            "user",
            JSON.stringify({ login: user.login, password: user.password })
          );
          return fetchedUser;
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  getUser: async () => {
    try {
      const data = localStorage.getItem("user");
      console.log("data", data);

      if (!data) return;
      const localUser = JSON.parse(data);
      const fetchedUser = await signInFetch({
        login: localUser.login,
        password: localUser.password,
      });
      const salaries = await getSalaries(fetchedUser.id);
      const currentDate = new Date().toISOString();

      const transactions = await getTransactionByDate({
        artistId: fetchedUser.id,
        startDate: currentDate,
        endDate: weekAgo(),
      });

      const user = {
        login: fetchedUser?.login,
        password: fetchedUser?.password,
        id: fetchedUser?.id,
        role: fetchedUser?.role,
      };

      const artist = {
        login: fetchedUser?.login,
        birthDay: fetchedUser?.birthDay,
        percent: fetchedUser?.percent,
        id: fetchedUser?.id,
      };

      set({
        user,
        transactions,
        salaries,
        artist,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ login: user.login, password: user.password })
      );
    } catch (error) {}
  },
  logOut: () => {
    set({
      user: initState,
      artist: initArtistState,
      transactions: [],
      salaries: [],
    });
    localStorage.setItem("user", JSON.stringify(""));
  },

  updateStoreSalary: async (data: UpdateSalaryTypes) => {
    try {
      const salary = await updateSalary(data);

      set((state) => {
        const updateSalaries: SalaryType[] = state.salaries.map((item) => {
          return item.id === salary.data.id ? salary.data : item;
        });

        return {
          salaries: updateSalaries,
        };
      });
    } catch (error) {}
  },
  createStoreTransaction: async (data: TransactionDataType) => {
    try {
      const transaction = await createTransaction(data);

      set((state) => {
        return {
          transactions: [transaction, ...state.transactions],
        };
      });
    } catch (error) {}
  },

  updateStoreSalaryStatus: async (data: SalaryStatusType) => {
    try {
      const updatedSalary = await updateSalaryStatus(data);
      set((state) => {
        const updateSalaries: SalaryType[] = state.salaries.map((item) => {
          return item.id === updatedSalary.id
            ? {
                ...item,
                approveArtist: updatedSalary.approveArtist,
                approveSalon: updatedSalary.approveSalon,
              }
            : item;
        });
        return {
          salaries: updateSalaries,
        };
      });
    } catch (error) {}
  },

  getTransactions: async (data: DateTypes) => {
    try {
      const transactions = await getTransactionByDate(data);

      set((state) => {
        return {
          transactions,
        };
      });
    } catch (error) {}
  },

  changeArtist: async (data: responseArtists) => {
    try {
      const salaries = await getSalaries(data.id);
      const currentDate = new Date().toISOString();
      const transactions = await getTransactionByDate({
        artistId: data.id,
        startDate: currentDate,
        endDate: weekAgo(),
      });
      const artist = {
        login: data.login,
        percent: data.percent,
        id: data.id,
        birthDay: data.birthDay,
      };
      set({ artist, salaries, transactions });
    } catch (error) {}
  },
  createSalary: async (id: number) => {
    try {
      if (id) {
        const salary = await createSalary(id);

        set((state) => {
          return {
            salaries: [salary, ...state.salaries],
          };
        });
        return salary;
      }
    } catch (error) {}
  },
}));

export type artistsTypes = {
  artists: responseArtists[];
  currentIdx: number;
  fetchArtists: () => Promise<responseArtists[] | undefined>;
  setCurrentIdx: (idx: number) => void;
};

export const useArtists = create<artistsTypes>()((set) => ({
  artists: [],
  currentIdx: 0,
  fetchArtists: async () => {
    try {
      const artists = await getArtists();
      set({
        artists,
      });
      return artists;
    } catch (error) {}
  },

  setCurrentIdx: (idx: number) => {
    set({
      currentIdx: idx,
    });
  },
}));

export type AlertTypes = {
  isOpen: boolean;
  textAlert: "ERROR" | "SUCCESS" | string;
  toggleAlert: (text: string) => void;
};

export const useAlert = create<AlertTypes>()((set) => ({
  isOpen: false,
  textAlert: "",
  toggleAlert: (text: string) => {
    set((state) => {
      return {
        textAlert: text,
        isOpen: !state.isOpen,
      };
    });
  },
}));

export type ModalTypes = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useModal = create<ModalTypes>()((set) => ({
  isOpen: false,
  openModal: () => {
    set({
      isOpen: true,
    });
  },
  closeModal: () => {
    set({
      isOpen: false,
    });
  },
}));
