export function formatNumberToPtBr(price) {
  return `R$ ${price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
}
