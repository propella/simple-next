import Image from "next/image";
import { GetStaticProps } from "next";
import { game } from "../lib/game";

export const getStaticProps: GetStaticProps = async (context) => {
  return game();
};

export default function Static({
  image,
  name,
}: ReturnType<typeof game>["props"]) {
  return (
    <>
      <p>Game</p>
      <p>
        <Image src={image} height={144} width={144} alt={name} />
        {name}
      </p>
    </>
  );
}
