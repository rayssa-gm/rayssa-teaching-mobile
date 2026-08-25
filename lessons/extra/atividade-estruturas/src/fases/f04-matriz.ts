/**
 * F04 — Matrizes
 * Edite somente os TODOs deste arquivo.
 * Verificação: npm run check
 */
import { TODO } from "../lib/todo";

// TODO F04-A01
export function criarMatrizExemplo(): number[][] {
  return [
    [8, 9],
    [7, 8],
    [9, 10],
  ];
}

// TODO F04-A02
export function obterNota(matriz: number[][], linha: number, coluna: number): number {
  return matriz[linha][coluna];
}

// TODO F04-A03
export function obterLinha(matriz: number[][], linha: number): number[] {
  return matriz[linha];
}

// TODO F04-A04
export function alterarCelula(
  matriz: number[][],
  linha: number,
  coluna: number,
  novaNota: number,
): number[][] {
  matriz[linha][coluna] = novaNota;
  return matriz;
}

// TODO F04-A05
export function dimensoes(matriz: number[][]): [number, number] {
  return [matriz.length, matriz[0].length];
}
