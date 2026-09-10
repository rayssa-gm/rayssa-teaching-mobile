import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartaoMemoria } from "../components/CartaoMemoria";
import { MEMORIAS } from "../src/dominio";

export default function Index() {
  const [idSelecionada, setIdSelecionada] = useState<number | null>(null);
  const memoriaSelecionada = MEMORIAS.find((memoria) => memoria.id === idSelecionada);

  function alternarSelecao(id: number): void {
    setIdSelecionada((idAtual) => (idAtual === id ? null : id));
  }

  return (
    <SafeAreaView style={styles.tela}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.marca}>IFMA · PROTÓTIPO DIDÁTICO</Text>
        <Text style={styles.titulo}>Memórias Quilombolas</Text>
        <Text style={styles.introducao}>Selecione um registro fictício para visualizar seus detalhes.</Text>

        <View style={styles.lista}>
          {MEMORIAS.map((memoria) => (
            <CartaoMemoria
              key={memoria.id}
              memoria={memoria}
              selecionada={memoria.id === idSelecionada}
              aoSelecionar={alternarSelecao}
            />
          ))}
        </View>

        {memoriaSelecionada ? (
          <View style={styles.detalhes}>
            <Text style={styles.rotulo}>MEMÓRIA SELECIONADA</Text>
            <Text style={styles.tituloDetalhes}>{memoriaSelecionada.titulo}</Text>
            <Text style={styles.texto}>{memoriaSelecionada.resumo}</Text>
          </View>
        ) : (
          <Text style={styles.vazio}>Nenhuma memória selecionada.</Text>
        )}

        <Text style={styles.aviso}>DADOS FICTÍCIOS · Não representam comunidades ou acontecimentos reais.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: "#F8FAFC" },
  conteudo: { padding: 20, paddingBottom: 36, width: "100%", maxWidth: 720, alignSelf: "center" },
  marca: { color: "#B91C1C", fontSize: 12, fontWeight: "700" },
  titulo: { color: "#166534", fontSize: 30, fontWeight: "800", marginTop: 6 },
  introducao: { color: "#334155", fontSize: 16, lineHeight: 23, marginTop: 8 },
  lista: { marginTop: 20 },
  detalhes: { backgroundColor: "#166534", borderRadius: 12, marginTop: 8, padding: 18 },
  rotulo: { color: "#DCFCE7", fontSize: 12, fontWeight: "700" },
  tituloDetalhes: { color: "#FFFFFF", fontSize: 20, fontWeight: "800", marginTop: 5 },
  texto: { color: "#F0FDF4", fontSize: 15, lineHeight: 22, marginTop: 8 },
  vazio: { color: "#64748B", fontSize: 15, marginTop: 10, textAlign: "center" },
  aviso: { color: "#64748B", fontSize: 12, lineHeight: 18, marginTop: 20, textAlign: "center" },
});
