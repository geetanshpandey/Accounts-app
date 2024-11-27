'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/main/navbaracounts';
import { Plus, File } from 'lucide-react';  // Adjust the path as per your project structure
import { Acme, Archivo_Black, Caveat, Bowlby_One } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: ['400'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });
const bowlbyOne = Bowlby_One({ subsets: ['latin'], weight: ['400'] });

const Transaction = () => {
  const [name, setName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddTransaction = () => {
    if (name.trim()) {
      alert(`Transaction "${name}" added!`);
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
              <Button className="bg-blue-100 text-black hover:bg-blue-300"><Plus className="w-5 h-5" />Add</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-xl font-bold">Add account</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                   Account Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter account holder name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 dark:border-gray-700 rounded-md"
                />
              </div>
              <DialogFooter className="mt-6 flex justify-end">
                <Button
                  onClick={handleAddTransaction}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                > <Plus className="w-5 h-5" />
                  Add
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Import Button */}
          <Button className="bg-neutral-800 text-white hover:bg-gray-600">Import</Button>
        </div>

        {/* Centered Heading and Subheading */}
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <h1 className="text-5xl font-bold text-blue-600 mb-4"><span className={`${caveat.className}`}>Accounts</span></h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            <span className={`${caveat.className} text-3xl font-bold`}>Numbers speak louder than words.</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Transaction;
