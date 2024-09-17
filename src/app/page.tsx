import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AccountsPage from './accounts/page';

export default async function Home() {
  return (
    <main>
      <AccountsPage />
    </main>
  );
}