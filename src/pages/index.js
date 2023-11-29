import Head from "next/head";
import Link from "next/link";
import classes from './index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>CPH Booking</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/login">
          <button className={classes.button}>Book Lokale</button>
        </Link>
      </main>
    </>
  );
}
