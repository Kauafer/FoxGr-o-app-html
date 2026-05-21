// Fox360 — Slide deck venda (export pptx)
// Cada slide tem texto à esquerda e mockup mobile à direita

const SlideShell = ({ children, idx, total = 11 }) => (
  <div data-screen-label={`${String(idx + 1).padStart(2, '0')} slide`} style={{
    width: '100%', height: '100%',
    background: '#F5F4EE',
    position: 'relative',
    padding: '60px 72px',
    boxSizing: 'border-box',
    display: 'flex', alignItems: 'center',
    fontFamily: 'Inter, system-ui, sans-serif',
  }}>
    {/* Logo top-left */}
    <div style={{
      position: 'absolute', top: 32, left: 60,
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <svg width="48" height="39" viewBox="0 0 1446.027 1179.018" fill={CL.brandGreen}>
        <path d="M1388.58,589.291s-26.509,1.443-113.805-21.952-166.061-91.051-218.086-127.314-140.541-53.341-191.123-63.1c27.057-106.264-48.045-192.89-48.045-192.89S799,246.046,721.59,375.388,468.271,634.744,468.271,634.744L519.4,539.681c-64.223,26.96-172.251,111.048-213.619,155.531,106.9-248.252,282.043-306.281,405.492-351.324C201.148,353.7,215.833,838.531,215.833,838.531s154.729-88.2,293.826-61.369,149.08,9.085,149.08,9.085S724.177,752.963,758,713.583s114.354-82.871,114.354-82.871l-94.84-18.291c177.576-70.676,326.883-28.761,376.243-12.682s111.369,34.6,142.98,40.693c-3.657,18.969-75.422,51.033-75.422,51.033C1386.59,667.6,1388.58,589.291,1388.58,589.291ZM970.067,515.124,916.6,452.348c140.316,20.509,159.508,57,176.035,73.3C1036.951,508.352,970.067,515.124,970.067,515.124Z" transform="translate(57.447 -184.038)"/>
        <path d="M417.829,335.088c46.358-53.358,65.984-138.105,65.984-138.105s61.123,74.091,41.5,158.838Z" transform="translate(530.365 -153.737)"/>
        <path d="M477.392,570.409s274.2,23.376,386.13,140.053c-63.226-12.192-293.5-76.283-404.2-12.384,25.289,4.878,88.6,26.206,116,39.907,71.756,35.878,127.85,75.589,251.272,112.907,89.848,27.168,501.158,155.688,527.39-439.3-86.622,75.1-91.727,67.56-105.59,71.445,9.981-17.75,51.35-62.23,42.363-83.639,0,0-71.311,97.727-245.679,83.768,0,0,172.023-143.881,342.51-143.787,151.38,898.114-532.528,657.5-727.481,541.7C544.524,812.423,351.5,628.1,134,769.765c0,0,128.059-326.9,524.516-305.415,330.992,17.939,385.679,74.391,385.679,74.391C620.582,457.033,477.392,570.409,477.392,570.409Z" transform="translate(-134 179.581)"/>
      </svg>
      <div style={{ font: '800 14px Inter', letterSpacing: '0.04em', color: CL.brandGreen }}>FoxGrãos</div>
    </div>

    {/* Page counter top-right */}
    <div style={{
      position: 'absolute', top: 36, right: 60,
      font: '700 12px "JetBrains Mono", monospace', letterSpacing: '0.16em', color: CL.ink3,
    }}>
      {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>

    {children}
  </div>
);

const SlideBody = ({ eyebrow, title, paragraphs, Tela, flipped }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: flipped ? '1fr 1.05fr' : '1.05fr 1fr',
    gap: 64, alignItems: 'center', width: '100%',
  }}>
    <div style={{ order: flipped ? 2 : 1 }}>
      <div style={{
        display: 'inline-block', padding: '6px 14px',
        background: '#fff', borderRadius: 999,
        font: '700 12px "JetBrains Mono", monospace', letterSpacing: '0.18em',
        color: CL.brandGreen, textTransform: 'uppercase',
        marginBottom: 22,
      }}>{eyebrow}</div>
      <h1 style={{
        margin: '0 0 22px', fontSize: 58, fontWeight: 800,
        letterSpacing: '-0.03em', lineHeight: 1.02, color: CL.ink,
      }}>{title}</h1>
      {paragraphs.map((p, i) => (
        <p key={i} style={{
          margin: '0 0 14px', fontSize: 19, lineHeight: 1.55, color: CL.ink2, maxWidth: 620,
        }}>{p}</p>
      ))}
    </div>
    <div style={{
      order: flipped ? 1 : 2,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', width: 380, height: 380, borderRadius: '50%',
        background: CL.brandGreenSoft, opacity: 0.5,
        filter: 'blur(8px)',
      }}/>
      <div style={{ transform: 'scale(0.95)', transformOrigin: 'center', position: 'relative', zIndex: 1 }}>
        <IOSDevice width={390} height={844}>
          <Tela/>
        </IOSDevice>
      </div>
    </div>
  </div>
);

// SLIDE 1 — CAPA
const SlideCapa = ({ idx }) => (
  <SlideShell idx={idx}>
    <div style={{ width: '100%', textAlign: 'left', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <div style={{
        display: 'inline-block', padding: '8px 18px',
        background: CL.brandGreen, color: '#fff', borderRadius: 999,
        font: '700 12px "JetBrains Mono", monospace', letterSpacing: '0.22em',
        marginBottom: 36,
      }}>FoxGrãos · MOBILE · MAIO DE 2026</div>
      <h1 style={{
        margin: '0 0 28px', fontSize: 88, fontWeight: 800,
        letterSpacing: '-0.04em', lineHeight: 0.96, color: CL.ink,
        maxWidth: 1100,
      }}>
        Venda de grãos <span style={{ color: CL.brandGreen }}>direto pelo aplicativo</span>.
      </h1>
      <p style={{ margin: 0, fontSize: 22, lineHeight: 1.55, color: CL.ink2, maxWidth: 820 }}>
        O produtor abre o app, escolhe uma oferta da Fox, define a quantidade, lê e assina o contrato pelo celular,
        e acompanha tudo na aba Contratos. Oito telas do fluxo completo.
      </p>

      {/* Bullets */}
      <div style={{ display: 'flex', gap: 60, marginTop: 56, flexWrap: 'wrap' }}>
        {[
          ['USUÁRIO', 'Produtor rural'],
          ['TELAS', '8 no total'],
          ['FINALIZAÇÃO', 'Assinatura D4Sign'],
          ['DESTINO', 'Aba Contratos'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ font: '700 11px "JetBrains Mono", monospace', letterSpacing: '0.18em', color: CL.brandGreen, marginBottom: 6 }}>{k}</div>
            <div style={{ fontSize: 19, fontWeight: 800, color: CL.ink }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideShell>
);

// SLIDES 2..9 — Passos do fluxo
const PassoSlide = ({ idx, eyebrow, title, paragraphs, Tela, flipped }) => (
  <SlideShell idx={idx}>
    <SlideBody eyebrow={eyebrow} title={title} paragraphs={paragraphs} Tela={Tela} flipped={flipped}/>
  </SlideShell>
);

// SLIDE 10 — FECHAMENTO
const SlideClosing = ({ idx, total }) => (
  <SlideShell idx={idx} total={total}>
    <div style={{
      width: '100%', maxWidth: 1100, margin: '0 auto',
      background: CL.brandGreen, color: '#fff',
      borderRadius: 28, padding: '70px 72px',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ font: '700 12px "JetBrains Mono", monospace', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}>
        RESUMO DO FLUXO
      </div>
      <h2 style={{ margin: '0 0 20px', fontSize: 56, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.04 }}>
        Nove telas. Um contrato assinado. Cargas no controle.
      </h2>
      <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, color: 'rgba(255,255,255,0.86)', maxWidth: 760 }}>
        O produtor vende, lê o contrato gerado, assina via D4Sign e acompanha contratos e cargas na
        mesma interface que já usa hoje. Sem reaprender nada.
      </p>

      <div style={{ display: 'flex', gap: 56, marginTop: 56, flexWrap: 'wrap' }}>
        {[
          ['1. Dashboard', 'Ofertas do dia'],
          ['2. Detalhe', 'Condições da oferta'],
          ['3. Quantidade', 'Sacas a vender'],
          ['4. Contrato', 'Preview completo'],
          ['5. Assinatura', 'D4Sign'],
          ['6. Confirmado', 'Venda finalizada'],
          ['7. Contratos', 'Histórico em tempo real'],
          ['8. Detalhe', 'Tabela atualizada'],
          ['9. Carga', 'Ticket concluído'],
        ].map(([n, v]) => (
          <div key={n}>
            <div style={{ font: '800 13px Inter', color: '#fff', marginBottom: 4 }}>{n}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </SlideShell>
);

const SlideDeck = () => {
  const slides = [
    { kind: 'capa' },
    { kind: 'passo', eyebrow: 'Passo 01 · Dashboard', title: 'O produtor vê as ofertas do dia.', paragraphs: ['A tela inicial mostra as cotações do mercado e a lista de ofertas que a Fox está disponibilizando hoje, agrupadas por produto e mês de referência.', 'Cada oferta tem preço, mês e botão direto para venda. O atalho para falar com a Fox via WhatsApp permanece sempre visível.'], Tela: CLDashboardVendaScreen, flipped: false },
    { kind: 'passo', eyebrow: 'Passo 02 · Detalhe', title: 'A oferta aberta com todas as condições.', paragraphs: ['Preço por saca em destaque, volume buscado, unidade de entrega, janela, condição de pagamento e responsabilidade pelo frete.', 'O produtor avança para definir a quantidade ou volta para comparar com outras ofertas.'], Tela: CLOfertaDetalheScreen, flipped: true },
    { kind: 'passo', eyebrow: 'Passo 03 · Quantidade', title: 'Quanto vender dessa oferta.', paragraphs: ['Seletor grande com mais/menos, slider visual e atalhos rápidos de 25 %, 50 %, 75 % ou Tudo, limitado pelo volume buscado pela oferta.', 'O total bruto é calculado ao vivo. Ao confirmar, o sistema gera automaticamente o contrato de compra e venda.'], Tela: CLSelecionarQuantidadeScreen, flipped: false },
    { kind: 'passo', eyebrow: 'Passo 04 · Contrato', title: 'Antes de assinar, ele lê o contrato.', paragraphs: ['Preview rico do documento gerado, com Partes (vendedor e comprador), Objeto (produto, quantidade, valor, local, janela e pagamento) e Principais cláusulas.', 'Quem quiser conferir o documento completo pode baixar o PDF de 17 páginas. O selo D4Sign confirma a validade jurídica.'], Tela: CLRevisarContratoScreen, flipped: true },
    { kind: 'passo', eyebrow: 'Passo 05 · Assinatura', title: 'Assinatura digital pela D4Sign.', paragraphs: ['Resumo do contrato no topo, caixa de assinatura no meio, registro técnico com data, hora, IP e hash, e aceite das cláusulas.', 'Conforme a MP 2.200-2 de 2001, a assinatura tem o mesmo valor de uma assinatura presencial.'], Tela: CLAssinarContratoScreen, flipped: false },
    { kind: 'passo', eyebrow: 'Passo 06 · Confirmação', title: 'A venda foi finalizada.', paragraphs: ['Tela de sucesso com o selo Contrato Assinado, número do contrato, status Em Andamento e os principais valores em um card branco.', 'Dois botões para agir agora: agendar a carga para entrega ou abrir o detalhamento completo do contrato.'], Tela: CLSucessoVendaScreen, flipped: true },
    { kind: 'passo', eyebrow: 'Passo 07 · Contratos', title: 'Histórico e controle de contratos em tempo real.', paragraphs: ['A aba Contratos continua exatamente como hoje. O contrato recém assinado se junta aos demais dentro do bloco do mês correspondente.', 'A partir daí o produtor acompanha cargas, tickets e pagamentos por dentro do mesmo card.'], Tela: CLContratosAposVendaScreen, flipped: false },
    { kind: 'passo', eyebrow: 'Passo 08 · Detalhe', title: 'O popup mostra a tabela atualizada.', paragraphs: ['Cabeçalho verde, tabela com ID, produto, valor, contratado e executado. O contrato recém criado aparece na lista junto aos outros do mês.', 'Mesmo padrão visual dos popups que o produtor já conhece no aplicativo.'], Tela: CLDetalheContratoPopupScreen, flipped: true },
    { kind: 'passo', eyebrow: 'Passo 09 · Carga', title: 'Detalhes da carga em uma única tela.', paragraphs: ['Ao tocar em um ticket de carga, o produtor abre a tela Detalhes da Carga com todos os dados consolidados em um único cartão branco.', 'Data de carregamento, motorista, placa, origem, peso bruto e peso líquido aparecem em formato de tabela. O selo FINALIZADO verde indica que a carga já foi concluída.'], Tela: CLDetalheCargaScreen, flipped: false },
    { kind: 'closing' },
  ];

  return (
    <>
      {slides.map((s, i) => {
        const Inner = (() => {
          if (s.kind === 'capa') return <SlideCapa idx={i} total={slides.length}/>;
          if (s.kind === 'closing') return <SlideClosing idx={i} total={slides.length}/>;
          return <PassoSlide idx={i} total={slides.length} {...s}/>;
        })();
        return <div key={i} className={'slide' + (i === 0 ? ' active' : '')}>{Inner}</div>;
      })}
    </>
  );
};

ReactDOM.createRoot(document.getElementById('stage')).render(<SlideDeck/>);
