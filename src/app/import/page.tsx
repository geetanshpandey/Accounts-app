'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/main/navbaracounts';
import { Plus, File } from 'lucide-react';  // Adjust the path as per your project structure
import { ArrowUpDown } from "lucide-react";

import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const Import = () => {
  const [name, setName] = useState('');
  const [transactionType, setTransactionType] = useState('income'); // New state for transaction type
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddTransaction = () => {
    if (name.trim()) {
      alert(`Transaction "${name}" of type "${transactionType}" added!`);
      setName(''); // Clear the input field after adding
      setIsDialogOpen(false); // Close the dialog
    } else {
      alert('Please enter a transaction name.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Buttons Section in the Top Right */}
        <div className="absolute top-4 right-6 flex items-center gap-4">
          {/* Add Dialog Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button className="bg-blue-100 text-black hover:bg-blue-300">
                <Plus className="w-5 h-5" /> Add
                </Button>
            </DialogTrigger>

            <DialogContent className="p-6 transform scale-95">
                <DialogHeader>
                <DialogTitle className="text-center text-blue-600 text-2xl font-bold pt-4"><span className={`${caveat.className}`}>Add Imports</span></DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4 mt-4">
                {/* Transaction Heading */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Import Details</h2>
                </div>

                {/* Transaction Type Dropdown */}
                <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Import Type
                    </label>
                    <select
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="border border-gray-300 dark:border-gray-700 rounded-md p-2 mt-1 w-full"
                    >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                    </select>
                </div>

                {/* Account and Date Fields in the Same Line */}
                <div className="flex gap-4">
                    <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Account
                    </label>
                    <Input
                        type="text"
                        placeholder="Enter account name"
                        className="border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full p-2"
                    />
                    </div>

                    <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Date
                    </label>
                    <Input
                        type="date"
                        className="border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full p-2"
                    />
                    </div>
                </div>

                {/* Payee and Amount Fields in the Same Line */}
                <div className="flex gap-4">
                    <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Payee Name
                    </label>
                    <Input
                        type="text"
                        placeholder="Enter payee name"
                        className="border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full p-2"
                    />
                    </div>

                    <div className="flex-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Amount
                    </label>
                    <Input
                        type="number"
                        placeholder="Enter transaction amount"
                        className="border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full p-2"
                    />
                    </div>
                </div>

                {/* Notes Field */}
                <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Notes
                    </label>
                    <textarea
                    placeholder="Add any notes"
                    className="border border-gray-300 dark:border-gray-700 rounded-md mt-1 w-full p-2"
                    rows={3}
                    />
                </div>
                </div>

                <DialogFooter className="flex justify-end">
                <Button
                    onClick={handleAddTransaction}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                >
                    <Plus className="w-5 h-5" /> Create
                </Button>
                </DialogFooter>
            </DialogContent>
            </Dialog>

          {/* Import Button */}
          <Button className="bg-neutral-800 text-white hover:bg-gray-600">Import</Button>
        </div>

        {/* Centered Heading and Subheading */}
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            <span className={`${caveat.className}`}>Imports</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <span className={`${caveat.className} text-3xl font-bold`}>
              Manage your Imports effortlessly.
            </span>
          </p>
        </div>
        <Table className='mt-8'>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"><span className='flex'>Date <ArrowUpDown className="w-5 h-5 ml-2" /></span></TableHead>
              <TableHead ><span className='flex'>Category  <ArrowUpDown className="w-5 h-5 ml-2" /></span></TableHead>
              <TableHead ><span className='flex'>Payee  <ArrowUpDown className="w-5 h-5 ml-2" /></span></TableHead>
              <TableHead ><span className='flex'>Amount  <ArrowUpDown className="w-5 h-5 ml-2" /></span></TableHead>
              <TableHead ><span className='flex'>Account  <ArrowUpDown className="w-5 h-5 ml-2" /></span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>180-240</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
};

export default Import;
