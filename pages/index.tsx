import Head from "next/head";
import dynamic from "next/dynamic";
import { Layout } from "@/components/layout/Layout";

const Banner = dynamic(() => import("@/components/sections/Banner"));
const Advantages = dynamic(() => import("@/components/sections/Advantages"));
const OurAgents = dynamic(() => import("@/components/sections/OurAgents"));
const OurSolutions = dynamic(
  () => import("@/components/sections/OurSolutions")
);
const Products = dynamic(() => import("@/components/sections/Products"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Real-Estate</title>
      </Head>
      <Layout>
        <Banner />
        <Advantages />
        <Products />
        <OurAgents />
        <OurSolutions />
      </Layout>
    </>
  );
}
