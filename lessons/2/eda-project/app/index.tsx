// The project runtime provides React; suppress the editor error when
// its type declarations are not available in the current TypeScript context.
// @ts-ignore
import { createElement, useState } from "react";

// The project runtime provides React Native; suppress the editor error when
// its type declarations are not available in the current TypeScript context.
// @ts-ignore
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
// @ts-ignore React Native types may be unavailable in the editor context.
} from "react-native";

// TODO 1: troque string por "adequado" | "atencao".

type SituacaoIndicador = "adequado" | "atencao";

type UnidadeIndicador = "%" | "p.p." | "estudantes";

interface IndicadorEDA {
  id: number;
  titulo: string;
  valor: number;
  meta: number;
  unidade: UnidadeIndicador;
  situacao: SituacaoIndicador;
}

// Dados inteiramente fictícios, agregados e sem identificação pessoal.
const INDICADORES: IndicadorEDA[] = [
  {
    id: 1,
    titulo: "Frequência média",
    valor: 88,
    meta: 90,
    unidade: "%",
    situacao: "atencao",
  },
  {
    id: 2,
    titulo: "Atividades entregues",
    valor: 94,
    meta: 90,
    unidade: "%",
    situacao: "adequado",
  },
  {
    id: 3,
    titulo: "Estudantes em acompanhamento",
    valor: 7,
    meta: 5,
    unidade: "estudantes",
    situacao: "atencao",
  },
];

function formatarValor(valor: number, unidade: UnidadeIndicador): string {
  // TODO 2: use espaço antes de "estudantes" e não use espaço nos símbolos.
  if (unidade === "estudantes") {
    return `${valor} ${unidade}`;
  }
  return `${valor}${unidade}`;
}

type CartaoIndicadorProps = {
  indicador: IndicadorEDA;
};

function CartaoIndicador({ indicador }: CartaoIndicadorProps) {
  const emAtencao = indicador.situacao === "atencao";

  return createElement(
    View,
    { style: [styles.cartao, emAtencao && styles.cartaoAtencao] },
    createElement(
      View,
      { style: styles.linhaTitulo },
      createElement(Text, { style: styles.tituloCartao }, indicador.titulo),
      createElement(
        Text,
        { style: [styles.situacao, emAtencao && styles.situacaoAtencao] },
        emAtencao ? "ATENÇÃO" : "ADEQUADO",
      ),
    ),
    createElement(
      Text,
      { style: styles.valor },
      formatarValor(indicador.valor, indicador.unidade),
    ),
    createElement(
      Text,
      { style: styles.meta },
      "Meta didática: ",
      formatarValor(indicador.meta, indicador.unidade),
    ),
  );
}

export default function Index() {
  const [somenteAtencao, setSomenteAtencao] = useState<boolean>(false);

  // TODO 3: filtre os indicadores quando somenteAtencao for true.
  const indicadoresVisiveis = somenteAtencao
    ? INDICADORES.filter((i) => i.situacao === "atencao")
    : INDICADORES;

  function alternarFiltro(): void {
    // TODO 4: alterne com base no valor anterior.
    setSomenteAtencao((valorAnterior: boolean) => !valorAnterior);
  }

  return createElement(
    SafeAreaView,
    { style: styles.tela },
    createElement(
      ScrollView,
      { contentContainerStyle: styles.conteudo },
      createElement(Text, { style: styles.marca }, "IFMA · PROTÓTIPO DIDÁTICO"),
      createElement(Text, { style: styles.titulo }, "Painel EDA"),
      createElement(
        Text,
        { style: styles.introducao },
        "Indicadores simulados de permanência estudantil.",
      ),
      createElement(
        View,
        { style: styles.controles },
        createElement(
          Pressable,
          {
            onPress: alternarFiltro,
            style: [styles.botao, somenteAtencao && styles.botaoAtivo],
          },
          createElement(
            Text,
            { style: [styles.textoBotao, somenteAtencao && styles.textoBotaoAtivo] },
            somenteAtencao ? "Mostrar todos" : "Somente atenção",
          ),
        ),
        createElement(Text, { style: styles.contagem }, `${indicadoresVisiveis.length} exibidos`),
      ),
      createElement(
        View,
        { style: styles.lista },
        ...indicadoresVisiveis.map((indicador) =>
          createElement(CartaoIndicador, { key: indicador.id, indicador }),
        ),
      ),
      createElement(
        Text,
        { style: styles.aviso },
        "Dados fictícios e agregados: não representam uma turma ou estudantes reais.",
      ),
    ),
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  conteudo: {
    padding: 20,
    paddingBottom: 36,
  },
  marca: {
    color: "#B91C1C",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.8,
  },
  titulo: {
    color: "#166534",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 6,
  },
  introducao: {
    color: "#334155",
    fontSize: 16,
    lineHeight: 23,
    marginTop: 8,
  },
  controles: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  botao: {
    backgroundColor: "#FFFFFF",
    borderColor: "#166534",
    borderRadius: 999,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  botaoAtivo: {
    backgroundColor: "#166534",
  },
  textoBotao: {
    color: "#166534",
    fontSize: 14,
    fontWeight: "700",
  },
  textoBotaoAtivo: {
    color: "#FFFFFF",
  },
  contagem: {
    color: "#64748B",
    fontSize: 14,
  },
  lista: {
    marginTop: 16,
  },
  cartao: {
    backgroundColor: "#FFFFFF",
    borderColor: "#BBF7D0",
    borderLeftWidth: 6,
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
  },
  cartaoAtencao: {
    borderColor: "#B91C1C",
  },
  linhaTitulo: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tituloCartao: {
    color: "#0F172A",
    flex: 1,
    fontSize: 17,
    fontWeight: "700",
    paddingRight: 8,
  },
  situacao: {
    color: "#166534",
    fontSize: 11,
    fontWeight: "800",
  },
  situacaoAtencao: {
    color: "#B91C1C",
  },
  valor: {
    color: "#166534",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 12,
  },
  meta: {
    color: "#64748B",
    fontSize: 14,
    marginTop: 4,
  },
  aviso: {
    color: "#64748B",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 12,
    textAlign: "center",
  },
});

