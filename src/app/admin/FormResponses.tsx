"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
type responseType = {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};
const FormResponses = () => {
  const [formResponses, setFormResponses] = useState<responseType[]>([]);
  const getResponses = async () => {
    const res = await axios.get("/api/formResponses");
    if (res.status === 200) {
      setFormResponses(res.data.responses);
    }
  };
  useEffect(() => {
    getResponses();
  }, []);
  return (
    <div className="px-5 sm:px-20">
      <Table className="my-10">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formResponses.map((response) => {
            return (
              <TableRow key={response._id}>
                <TableCell>{response.name}</TableCell>
                <TableCell>{response.email}</TableCell>
                <TableCell>{response.message}</TableCell>
                <TableCell>{new Date(response.createdAt).toLocaleDateString()}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default FormResponses;
