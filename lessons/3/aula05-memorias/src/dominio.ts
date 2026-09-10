// Baseline consolidada da Aula 4. Todos os registros são fictícios.
export type CategoriaMemoria = "Relato" | "Lugar" | "Celebração";

export interface Memoria {
  id: number;
  titulo: string;
  comunidade: string;
  categoria: CategoriaMemoria;
  resumo: string;
  ano?: number;
}

export const MEMORIAS: Memoria[] = [
  { id: 1, titulo: "História do caminho antigo", comunidade: "Comunidade Fictícia A", categoria: "Relato", resumo: "Relato simulado sobre caminhos usados entre casas e roçados.", ano: 1998 },
  { id: 2, titulo: "Praça das conversas", comunidade: "Comunidade Fictícia B", categoria: "Lugar", resumo: "Descrição simulada de um espaço de encontro comunitário." },
  { id: 3, titulo: "Celebração da colheita", comunidade: "Comunidade Fictícia C", categoria: "Celebração", resumo: "Registro simulado sobre partilha, música e memória coletiva.", ano: 2015 },
];

export function criarLegenda(memoria: Memoria): string {
  const ano = memoria.ano ? ` · ${memoria.ano}` : "";
  return `${memoria.categoria} · ${memoria.comunidade}${ano}`;
}
