export function game() {
  const index = Math.floor(Math.random() * 3);
  const hand = [
    {
      image: "janken_gu",
      name: "Rock",
    },
    { image: "janken_choki", name: "Scissors" },
    { image: "janken_pa", name: "Paper" },
  ][index];
  return {
    props: {
      image: `/images/${hand.image}.png`,
      name: hand.name,
    },
  };
}
