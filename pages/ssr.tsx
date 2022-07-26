import Image from "next/image";
import { GetServerSideProps } from "next";
import { game } from "../lib/game";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return game();
};

export default function ServerSide({ image, name }) {
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
