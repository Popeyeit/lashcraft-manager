export type TransactionFormData = {
  customerName: string;
  amount: number;
  tip?: number;
  service: string;
  paymentMethod: "CASH" | "ZELLE" | "CARD" | "VENMO";
};

export type TransactionDataType = {
  customerName: string;
  amount: number;
  tip?: number;
  service: string;
  paymentMethod: "CASH" | "ZELLE" | "CARD" | "VENMO";
  artistId: number;
  salaryId: number;
};

// customerName  String
// amount        Int
// tip           Int           @default(0)
// service       String
// artist        Artist        @relation(fields: [artistId], references: [id])
// artistId      Int
// salary        Salary        @relation(fields: [salaryId], references: [id])
// salaryId      Int
// paymentMethod PaymentMethod @default(CASH)
