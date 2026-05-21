// Fox360 — Fluxo de venda · VISUAL ATUAL
// Replica o aplicativo existente: header verde escuro com marca d'água da raposa,
// tab bar inferior (Início / Contratos / Cargas), chips com emoji, popups em tabela.

// ─── Paleta classico ────────────────────────────────────────
const CL = {
  headerGreen: '#1F5938',     // verde escuro do header
  headerGreenDark: '#143D26', // sombra do header
  brandGreen:  '#0F6B3A',     // verde da marca / botões / pills
  brandGreenSoft: '#E2F0E6',  // verde claro (pill background)
  bgGray:      '#F2F1ED',     // fundo neutro do app
  cardBg:      '#FFFFFF',
  line:        '#E6E6E1',
  ink:         '#1A1A17',
  ink2:        '#4A4A45',
  ink3:        '#9A9A92',
  totalBlack:  '#0D1612',
  pillYellow:  '#F4E5A1',     // chip soja
  pillYellowBg:'#F8EFC2',
  pillBlue:    '#CFE0EC',     // chip sorgo
  pillBlueBg:  '#DDE9F0',
  pillGreen:   '#C5E3CC',     // chip milho
  pillGreenBg: '#D8EDDD',
  statusYellow:'#F7CF3B',     // ribbon de cotacoes
  good:        '#27A85A',
  bad:         '#D8413B',
};

// ─── Watermark da raposa (logo Fox estilizada) ─────────────────
const FoxWatermark = ({ opacity = 0.16 }) => (
  <svg
    style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      opacity, pointerEvents: 'none',
    }}
    width="320" height="140" viewBox="0 0 320 140" fill="none"
  >
    {/* Folha (esquerda) */}
    <path
      d="M 70 78
         C 60 50, 80 30, 115 35
         C 140 38, 150 55, 145 75
         C 142 88, 130 95, 115 95
         C 95 95, 78 90, 70 78 Z"
      fill="#0A3A1F"
    />
    <path
      d="M 75 80 C 90 65, 110 55, 135 60"
      stroke="#1F5938" strokeWidth="1.5" fill="none" opacity="0.5"
    />
    {/* Cabeça da raposa (direita) */}
    <path
      d="M 140 90
         L 155 50
         L 170 78
         L 180 75
         L 188 50
         L 200 80
         L 220 75
         C 240 78, 250 90, 240 100
         C 230 110, 210 108, 195 100
         L 180 102
         L 165 100
         C 150 100, 142 96, 140 90 Z"
      fill="#0A3A1F"
    />
    {/* Olho pequeno claro */}
    <ellipse cx="200" cy="88" rx="4" ry="3" fill="#1F5938" opacity="0.7"/>
  </svg>
);

// ─── Header verde escuro padrão do app ──────────────────────
const CLHeader = ({ title, greeting, avatar = 'G', showBack = true, showBell = true }) => (
  <div style={{
    background: CL.headerGreen,
    color: '#fff',
    padding: '12px 16px 18px',
    position: 'relative',
    overflow: 'hidden',
    minHeight: 110,
  }}>
    <FoxWatermark/>

    {showBack && (
      <div style={{
        position: 'relative', zIndex: 1,
        fontSize: 12, color: '#fff', opacity: 0.92,
        marginBottom: 14, display: 'flex', alignItems: 'center', gap: 4,
        fontWeight: 600,
      }}>
        <span style={{ fontSize: 11 }}>◀</span> Scanner de Códi...
      </div>
    )}

    <div style={{
      display: 'flex', alignItems: 'center',
      position: 'relative', zIndex: 1,
      minHeight: 40,
    }}>
      {showBell ? (
        <button style={{ width: 30, height: 30, border: 0, background: 'transparent', color: '#fff', display: 'grid', placeItems: 'center', padding: 0, marginLeft: -4 }}>
          <Icon name="bell" size={20} color="#fff" stroke={1.8}/>
        </button>
      ) : <span style={{ width: 30 }}/>}

      {title && (
        <h1 style={{
          margin: 0, fontSize: 17, fontWeight: 800, letterSpacing: '-0.005em',
          color: '#fff', textAlign: 'center', flex: 1,
        }}>{title}</h1>
      )}

      {greeting && (
        <div style={{ flex: 1, textAlign: 'right', paddingRight: 10 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>Olá, {avatar}.!</span>
        </div>
      )}

      <div style={{
        width: 38, height: 38, borderRadius: 999,
        background: '#D9D6CD', display: 'grid', placeItems: 'center',
        color: CL.ink, fontWeight: 800, fontSize: 14,
      }}>{avatar}</div>
    </div>
  </div>
);

// ─── Tab bar inferior (Início · Contratos · Cargas) ─────────
const CLTabBar = ({ active = 'inicio' }) => {
  const tabs = [
    { id: 'inicio', label: 'Início', icon: 'home' },
    { id: 'contratos', label: 'Contratos', icon: 'doc' },
    { id: 'cargas', label: 'Cargas', icon: 'truck' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      background: CL.headerGreen,
      padding: '14px 12px 26px',
      display: 'flex',
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <div key={t.id} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <Icon name={t.icon} size={22} color="#fff" stroke={on ? 2.2 : 1.7}/>
            <span style={{ fontSize: 12, color: '#fff', fontWeight: on ? 800 : 500, opacity: on ? 1 : 0.85 }}>{t.label}</span>
          </div>
        );
      })}
    </div>
  );
};

// ─── Tab pills (Todos / Em andamento / Concluídos) ──────────
const CLTabPills = ({ active = 1, labels = ['Todos', 'Em andamento', 'Concluídos'] }) => (
  <div style={{
    display: 'flex',
    background: '#E5E4DE',
    borderRadius: 999,
    padding: 4,
    margin: '0 16px',
  }}>
    {labels.map((l, i) => {
      const on = i === active;
      return (
        <div key={l} style={{
          flex: 1, padding: '9px 6px', borderRadius: 999,
          background: on ? CL.brandGreen : 'transparent',
          color: on ? '#fff' : CL.ink2,
          fontSize: 12.5, fontWeight: on ? 700 : 600,
          textAlign: 'center',
        }}>{l}</div>
      );
    })}
  </div>
);

// ─── Product chip com emoji ─────────────────────────────────
const CLProductChip = ({ emoji, label }) => (
  <div style={{
    background: CL.cardBg, border: `1px solid ${CL.line}`,
    padding: '6px 12px 6px 8px', borderRadius: 999,
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontSize: 12, fontWeight: 700, color: CL.ink,
    whiteSpace: 'nowrap',
  }}>
    <span style={{ fontSize: 14 }}>{emoji}</span>
    {label}
  </div>
);

// ─── Status bar com 3 cotações (exato como app) ─────────────
const CLStatusBar = () => (
  <div style={{
    background: '#F4F2EE',
    padding: '10px 12px 8px',
    fontSize: 11, color: CL.ink2,
    borderBottom: `1px solid ${CL.line}`,
  }}>
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      alignItems: 'stretch',
    }}>
      {[
        { l: 'DOL 21/05/2026', v: 'R$ 4,99', d: '-0,32%' },
        { l: 'SJCK26 05/2026 (bu)', v: 'US$ 25,89', d: '0,00%' },
        { l: 'CCMK26 05/2026', v: 'R$ 65,32', d: '0,00%' },
      ].map((c, i) => (
        <div key={i} style={{
          borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.10)' : 'none',
          paddingLeft: i > 0 ? 10 : 0,
          paddingRight: 4,
        }}>
          <div style={{ fontSize: 9.5, color: CL.ink3, fontWeight: 600, lineHeight: 1.2 }}>{c.l}</div>
          <div style={{ marginTop: 4, lineHeight: 1.2 }}>
            <div style={{ fontWeight: 800, fontSize: 13, color: CL.ink }}>{c.v}</div>
            <div style={{ fontSize: 10.5, fontWeight: 700, color: CL.bad, marginTop: 1 }}>{c.d}</div>
          </div>
        </div>
      ))}
    </div>
    <div style={{
      display: 'flex', alignItems: 'center', gap: 4,
      marginTop: 6, fontSize: 10, color: CL.ink3,
    }}>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      Atualizado: 21/05/2026, 14:46
    </div>
  </div>
);

// ─── Page wrapper para visual classico ──────────────────────
const CLPage = ({ children }) => (
  <div style={{
    width: '100%', minHeight: '100%',
    background: CL.bgGray, color: CL.ink,
    fontFamily: 'Inter, system-ui, sans-serif',
    paddingTop: 44, // status bar iOS
    paddingBottom: 90,
    position: 'relative',
  }}>{children}</div>
);

// ════════════════════════════════════════════════════════════
// CL TELA 1 — Dashboard de ofertas (estilo TURVÂNIA)
// ════════════════════════════════════════════════════════════
const CLDashboardVendaScreen = () => {
  const ofertas = [
    {
      produto: 'MILHO', emoji: '🌽', tone: 'green',
      items: [
        { mes: '07-2026', preco: 'R$ 49,00' },
        { mes: '08-2026', preco: 'R$ 49,00' },
      ],
    },
    {
      produto: 'SOJA', emoji: '🌱', tone: 'yellow',
      items: [
        { mes: '05-2026', preco: 'R$ 102,51' },
        { mes: '08-2026', preco: 'R$ 104,95' },
      ],
    },
    {
      produto: 'SORGO', emoji: '🥔', tone: 'blue',
      items: [
        { mes: '07-2026', preco: 'R$ 42,25' },
        { mes: '08-2026', preco: 'R$ 39,00' },
      ],
    },
  ];
  const tonesBg = { green: '#D8F0DE', yellow: '#FAEAB7', blue: '#D2E1ED' };
  const tonesBg2 = { green: '#CEEBD5', yellow: '#F6E2A5', blue: '#C5D7E6' };
  const tonesBgHead = { green: '#B7E2C2', yellow: '#F2DA8E', blue: '#B7CCDD' };

  return (
    <CLPage>
      <CLHeader greeting avatar="G" showBack/>
      <CLStatusBar/>

      {/* Card TURVÂNIA com ofertas */}
      <div style={{ padding: 14 }}>
        <div style={{ background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`, padding: 12, boxShadow: '0 1px 0 rgba(0,0,0,0.02)' }}>
          {/* Cabeçalho do card */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 12 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill={CL.brandGreen}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h2 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: CL.ink, letterSpacing: '-0.005em' }}>TURVÂNIA</h2>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4, color: CL.ink3, fontSize: 10.5 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Atualizado: 21/05/2026, 14:46
              </div>
            </div>
            <div style={{ display: 'flex', gap: 5 }}>
              <button style={{ padding: '6px 10px', borderRadius: 999, background: '#fff', border: `1px solid ${CL.line}`, fontSize: 10.5, fontWeight: 600, color: CL.ink2, display: 'flex', alignItems: 'center', gap: 4 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
                Atualizar
              </button>
              <div style={{ padding: '5px 9px', borderRadius: 999, background: '#fff', border: `1px solid ${CL.line}`, fontSize: 10.5, fontWeight: 700, color: CL.ink2, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ color: CL.ink3 }}>‹</span> 1/13 <span style={{ color: CL.ink3 }}>›</span>
              </div>
            </div>
          </div>

          {/* Ofertas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {ofertas.map(of => (
              <div key={of.produto} style={{
                background: tonesBg[of.tone], borderRadius: 10, overflow: 'hidden',
              }}>
                {/* Header do produto */}
                <div style={{
                  background: tonesBgHead[of.tone],
                  padding: '7px 12px',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span style={{ fontSize: 16 }}>{of.emoji}</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: CL.ink, letterSpacing: '-0.005em' }}>{of.produto}</span>
                </div>
                {/* Mês + preço (com 2 backgrounds diferentes por dia) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  {of.items.map((it, i) => (
                    <div key={i} style={{
                      padding: '9px 12px',
                      background: i === 0 ? tonesBg[of.tone] : tonesBg2[of.tone],
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: CL.ink2, fontSize: 11 }}>
                        📅 <span>{it.mes}</span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 800, marginTop: 2, color: CL.ink }}>{it.preco}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA WhatsApp */}
      <div style={{ padding: '0 14px 16px' }}>
        <div style={{
          background: '#22C55E', borderRadius: 14, padding: '14px 16px',
          color: '#fff', display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="#25D366">
              <path d="M16.001 2.667c-7.364 0-13.334 5.97-13.334 13.334 0 2.354.622 4.557 1.71 6.469L2.668 29.334l7.097-1.864a13.276 13.276 0 0 0 6.236 1.527h.006c7.36 0 13.33-5.97 13.333-13.334 0-3.564-1.387-6.913-3.906-9.434a13.246 13.246 0 0 0-9.433-3.9zm.005 24.32h-.005a11.075 11.075 0 0 1-5.643-1.545l-.404-.241-4.21 1.105 1.123-4.103-.263-.42a11.071 11.071 0 0 1-1.695-5.882c.003-6.117 4.98-11.094 11.103-11.094 2.966.001 5.752 1.157 7.847 3.255a11.022 11.022 0 0 1 3.247 7.85c-.003 6.117-4.98 11.075-11.1 11.075zm6.085-8.302c-.334-.167-1.974-.974-2.28-1.085-.305-.111-.527-.167-.75.167-.222.334-.86 1.085-1.055 1.307-.194.223-.388.25-.722.084-.334-.167-1.408-.519-2.683-1.655-.991-.884-1.66-1.977-1.855-2.31-.194-.334-.02-.515.147-.681.15-.15.334-.39.5-.585.167-.195.222-.334.334-.557.111-.222.055-.418-.028-.585-.084-.167-.751-1.808-1.029-2.476-.27-.65-.546-.562-.751-.572l-.64-.012a1.227 1.227 0 0 0-.89.418c-.305.334-1.168 1.141-1.168 2.783 0 1.642 1.196 3.227 1.363 3.45.167.223 2.354 3.594 5.703 5.04.798.345 1.42.55 1.905.704.8.255 1.529.219 2.105.133.642-.096 1.974-.807 2.252-1.586.278-.78.278-1.449.194-1.587-.083-.139-.305-.222-.639-.39z"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 800 }}>Falar com a Fox</div>
            <div style={{ fontSize: 12, opacity: 0.92, marginTop: 1 }}>Tire dúvidas sobre ofertas</div>
          </div>
          <span style={{ fontSize: 18, fontWeight: 800 }}>›</span>
        </div>
      </div>

      <CLTabBar active="inicio"/>
    </CLPage>
  );
};

// ════════════════════════════════════════════════════════════
// CL TELA 2 — Detalhe de uma oferta (selecionou Soja 05-2026)
// ════════════════════════════════════════════════════════════
const CLOfertaDetalheScreen = () => {
  return (
    <CLPage>
      <CLHeader title="Oferta · Soja" showBack/>

      {/* Hero preço */}
      <div style={{ padding: 16 }}>
        <div style={{ background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`, padding: 18, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: CL.pillYellow, marginBottom: 12 }}>
            <span style={{ fontSize: 18 }}>🌱</span>
            <span style={{ fontWeight: 800, fontSize: 13, color: CL.ink }}>SOJA EM GRÃO</span>
          </div>
          <div style={{ fontSize: 11, color: CL.ink3, fontWeight: 600 }}>PREÇO POR SACA</div>
          <div style={{ fontSize: 42, fontWeight: 800, color: CL.brandGreen, marginTop: 6, letterSpacing: '-0.025em' }}>R$ 102,51</div>
          <div style={{ fontSize: 12, color: CL.ink3, marginTop: 4 }}>Válida até hoje, 18:00</div>
        </div>
      </div>

      {/* Condições */}
      <div style={{ padding: '0 16px' }}>
        <div style={{ font: '700 11px Inter', color: CL.ink2, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, paddingLeft: 4 }}>CONDIÇÕES</div>
        <div style={{ background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`, overflow: 'hidden' }}>
          {[
            { l: 'Volume buscado', v: 'até 8.000 sacas' },
            { l: 'Mês de referência', v: '05/2026' },
            { l: 'Unidade de entrega', v: 'Fox Turvânia, GO' },
            { l: 'Janela', v: '20/MAR a 10/ABR/2026' },
            { l: 'Pagamento', v: '7 dias úteis após a entrega' },
            { l: 'Custo logístico', v: 'FOB · por conta do comprador' },
          ].map((row, i) => (
            <div key={row.l} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '13px 16px',
              borderTop: i === 0 ? 'none' : `1px solid ${CL.line}`,
            }}>
              <span style={{ fontSize: 13, color: CL.ink2 }}>{row.l}</span>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: CL.ink, textAlign: 'right' }}>{row.v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div style={{ padding: 16 }}>
        <button style={{
          width: '100%', padding: 16, borderRadius: 12,
          background: CL.brandGreen, border: 0, color: '#fff',
          fontSize: 15, fontWeight: 800,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          📄 Selecionar quantidade
        </button>
      </div>

      <CLTabBar active="inicio"/>
    </CLPage>
  );
};

// ════════════════════════════════════════════════════════════
// CL TELA 3 — Selecionar quantidade
// ════════════════════════════════════════════════════════════
const CLSelecionarQuantidadeScreen = () => (
  <CLPage>
    <CLHeader title="Quantidade" showBack/>

    {/* Card quantidade */}
    <div style={{ padding: 16 }}>
      <div style={{ background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`, padding: '22px 16px', textAlign: 'center' }}>
        <div style={{ font: '700 11px Inter', color: CL.ink3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>QUANTIDADE</div>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 12, marginTop: 14 }}>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: '#EFEEEA', border: 0, fontSize: 22, fontWeight: 800, color: CL.ink2 }}>−</button>
          <span style={{ fontSize: 48, fontWeight: 800, color: CL.brandGreen, letterSpacing: '-0.03em' }}>1.233</span>
          <button style={{ width: 40, height: 40, borderRadius: 999, background: '#EFEEEA', border: 0, fontSize: 22, fontWeight: 800, color: CL.ink2 }}>+</button>
        </div>
        <div style={{ fontSize: 12, color: CL.ink3, marginTop: 4 }}>sacas de soja</div>

        {/* slider */}
        <div style={{ marginTop: 22 }}>
          <div style={{ height: 8, background: '#EFEEEA', borderRadius: 999, position: 'relative', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: '66.6%', background: CL.brandGreen, borderRadius: 999 }}/>
            <div style={{ position: 'absolute', left: '66.6%', top: '50%', transform: 'translate(-50%, -50%)', width: 22, height: 22, borderRadius: 999, background: '#fff', border: `3px solid ${CL.brandGreen}`, boxShadow: '0 2px 5px rgba(0,0,0,0.15)' }}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: CL.ink3, fontWeight: 600 }}>
            <span>0 sc</span>
            <span>até 8.000 sc (oferta)</span>
          </div>
        </div>

        {/* atalhos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginTop: 18 }}>
          {['25%', '50%', '75%', 'TUDO'].map((a, i) => {
            const on = i === 2;
            return (
              <div key={a} style={{
                padding: '9px 0', borderRadius: 10,
                background: on ? CL.brandGreen : '#F2F1ED',
                color: on ? '#fff' : CL.ink2,
                fontSize: 12, fontWeight: 800, textAlign: 'center',
              }}>{a}</div>
            );
          })}
        </div>
      </div>
    </div>

    {/* Cálculo */}
    <div style={{ padding: '0 16px' }}>
      <div style={{ font: '700 11px Inter', color: CL.ink2, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, paddingLeft: 4 }}>VOCÊ VAI RECEBER</div>
      <div style={{ background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`, padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
          <span style={{ fontSize: 13, color: CL.ink2 }}>1.233 sc × R$ 110,00</span>
          <span style={{ fontSize: 13.5, fontWeight: 700 }}>R$ 135.630,00</span>
        </div>
        <div style={{ height: 1, background: CL.line, margin: '10px 0' }}/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ font: '700 11px Inter', letterSpacing: '0.08em', color: CL.ink3, textTransform: 'uppercase' }}>TOTAL BRUTO</span>
          <span style={{ fontSize: 24, fontWeight: 800, color: CL.brandGreen, letterSpacing: '-0.02em' }}>R$ 135.630,00</span>
        </div>
      </div>
    </div>

    <div style={{ padding: 16 }}>
      <button style={{
        width: '100%', padding: 16, borderRadius: 12,
        background: CL.brandGreen, border: 0, color: '#fff',
        fontSize: 15, fontWeight: 800,
      }}>Gerar contrato</button>
    </div>

    <CLTabBar active="inicio"/>
  </CLPage>
);

// ════════════════════════════════════════════════════════════
// CL TELA 4 — Revisar contrato (padrão visual do app atual)
// ════════════════════════════════════════════════════════════
const CLRevisarContratoScreen = () => (
  <CLPage>
    <CLHeader title="Contrato" showBack/>

    {/* Card verde escuro de resumo (mesmo padrão do Contratos) */}
    <div style={{ padding: 16 }}>
      <div style={{
        background: CL.brandGreen, color: '#fff',
        borderRadius: 18, padding: '20px 18px',
        boxShadow: '0 6px 16px rgba(15,107,58,0.16)',
      }}>
        <div style={{ font: '700 10px Inter', letterSpacing: '0.16em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: 4 }}>CONTRATO Nº</div>
        <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em' }}>797564</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.18)' }}>
          {[
            { l: 'PRODUTO', v: 'Soja' },
            { l: 'SACAS', v: '1.233' },
            { l: 'VALOR', v: 'R$ 135K' },
          ].map((c, i) => (
            <div key={c.l} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.18)' : 'none' }}>
              <div style={{ font: '700 9.5px Inter', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)' }}>{c.l}</div>
              <div style={{ fontSize: 17, fontWeight: 800, marginTop: 4 }}>{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Tabs pill (Documento / Resumo) */}
    <div style={{ marginBottom: 14 }}>
      <CLTabPills active={0} labels={['Documento', 'Resumo', 'PDF']}/>
    </div>

    {/* Card branco com seções do contrato (tabela como o app usa) */}
    <div style={{ padding: '0 16px 14px' }}>
      <div style={{
        background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`,
        overflow: 'hidden',
      }}>
        {/* Cabeçalho do documento */}
        <div style={{ padding: '18px 18px 14px', background: '#F7F7F2', borderBottom: `1px solid ${CL.line}` }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ font: '700 10px Inter', letterSpacing: '0.16em', color: CL.brandGreen }}>CONTRATO DE COMPRA E VENDA</div>
            <h3 style={{ margin: '6px 0 0', fontSize: 14, fontWeight: 800, color: CL.ink, letterSpacing: '-0.005em' }}>
              DE GRÃOS
            </h3>
            <div style={{ fontSize: 10.5, color: CL.ink3, marginTop: 6, fontWeight: 600, letterSpacing: '0.08em' }}>17 PÁGINAS · ASSINATURA D4SIGN</div>
          </div>
        </div>

        {/* 1. PARTES */}
        <div style={{ padding: '12px 18px 14px', borderBottom: `1px solid ${CL.line}` }}>
          <div style={{ font: '800 11px Inter', color: CL.brandGreen, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>1. Partes</div>

          {[
            { papel: 'VENDEDOR', nome: 'Agropecuária Agro Safra Ltda.', cnpj: '11.096.304/0001-10', ie: '10.453.948-8' },
            { papel: 'COMPRADOR', nome: 'Fox Grãos Ltda.', cnpj: '47.531.319/0001-07', ie: '10.957.449-4' },
          ].map(p => (
            <div key={p.papel} style={{ marginBottom: 10 }}>
              <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, background: CL.brandGreenSoft, color: CL.brandGreen, fontSize: 10, fontWeight: 800, letterSpacing: '0.1em', marginBottom: 6 }}>{p.papel}</span>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: CL.ink }}>{p.nome}</div>
              <div style={{ fontSize: 11, color: CL.ink3, marginTop: 2 }}>CNPJ {p.cnpj} · IE {p.ie}</div>
            </div>
          ))}
        </div>

        {/* 2. OBJETO (formato tabela do app) */}
        <div style={{ padding: '12px 18px 14px', borderBottom: `1px solid ${CL.line}` }}>
          <div style={{ font: '800 11px Inter', color: CL.brandGreen, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>2. Objeto</div>
          {[
            ['Produto', 'Soja em grão'],
            ['Quantidade', '1.233 sacas de 60 kg'],
            ['Valor unitário', 'R$ 110,00'],
            ['Valor total dos grãos', 'R$ 135.630,00'],
            ['Custo logístico', 'FOB · comprador'],
            ['Local de retirada', 'Armazém José Renner'],
            ['Janela de entrega', '01/05 a 31/05/2026'],
            ['Prazo de pagamento', '7 dias após entrega'],
          ].map(([k, v]) => (
            <div key={k} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '8px 0',
              borderTop: k === 'Produto' ? 'none' : `1px dashed ${CL.line}`,
            }}>
              <span style={{ fontSize: 12, color: CL.ink2 }}>{k}</span>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: CL.ink }}>{v}</span>
            </div>
          ))}
        </div>

        {/* 3. CLÁUSULAS resumo */}
        <div style={{ padding: '12px 18px 14px', borderBottom: `1px solid ${CL.line}` }}>
          <div style={{ font: '800 11px Inter', color: CL.brandGreen, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 10 }}>3. Principais cláusulas</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['3.1', 'Os dados informados são verdadeiros e atuais.'],
              ['3.2', 'Os grãos são de propriedade exclusiva do vendedor, livres de ônus.'],
              ['3.3', 'Oscilação de preço de mercado não altera as obrigações.'],
              ['3.4', 'Caso fortuito e força maior não justificam descumprimento.'],
              ['3.7', 'Tratamento de dados segue a LGPD (Lei nº 13.709/2018).'],
            ].map(([n, t]) => (
              <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ font: '800 11px "JetBrains Mono", monospace', color: CL.brandGreen, minWidth: 24 }}>{n}</span>
                <span style={{ fontSize: 11.5, color: CL.ink2, lineHeight: 1.45, flex: 1 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10, padding: '7px 10px', borderRadius: 6, background: '#F7F7F2', fontSize: 10.5, color: CL.ink3, fontStyle: 'italic' }}>
            Continua nas páginas seguintes (qualidade, impostos, frete, multa, foro).
          </div>
        </div>

        {/* Assinaturas placeholder */}
        <div style={{ padding: '12px 18px 16px' }}>
          <div style={{ font: '800 11px Inter', color: CL.brandGreen, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 12 }}>Assinaturas</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { l: 'VENDEDOR', n: 'Agro Safra Ltda.' },
              { l: 'COMPRADOR', n: 'Fox Grãos Ltda.' },
            ].map(s => (
              <div key={s.l} style={{ textAlign: 'center' }}>
                <div style={{ borderBottom: `1.5px solid ${CL.line}`, height: 26, marginBottom: 6 }}/>
                <div style={{ fontSize: 9.5, color: CL.ink3, fontWeight: 800, letterSpacing: '0.1em' }}>{s.l}</div>
                <div style={{ fontSize: 9.5, color: CL.ink3, marginTop: 2 }}>{s.n}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Selo D4Sign */}
        <div style={{
          background: CL.brandGreenSoft, borderTop: `1px solid #B9DDC6`,
          padding: '11px 18px',
          display: 'flex', alignItems: 'center', gap: 10,
          fontSize: 11, color: CL.brandGreen, fontWeight: 700,
        }}>
          <span style={{ fontSize: 14 }}>🔒</span>
          D4Sign · conforme MP 2.200-2 / 01.
        </div>
      </div>
    </div>

    {/* Rodapé preto com totais (padrão do app) */}
    <div style={{ padding: '0 16px 14px' }}>
      <div style={{
        background: CL.totalBlack, color: '#fff',
        borderRadius: 14, padding: '14px 18px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <div>
          <div style={{ font: '700 10px Inter', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>VALOR GLOBAL</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4 }}>R$ 135.630,00</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ font: '700 10px Inter', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>SACAS</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4, color: '#5DD389' }}>1.233 sc</div>
        </div>
      </div>
    </div>

    {/* CTAs */}
    <div style={{ padding: '0 16px 10px' }}>
      <button style={{
        width: '100%', padding: 13, borderRadius: 12,
        background: CL.cardBg, border: `1px solid ${CL.line}`, color: CL.ink2,
        fontSize: 13.5, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>📄 Baixar contrato em PDF</button>
    </div>
    <div style={{ padding: '0 16px 16px' }}>
      <button style={{
        width: '100%', padding: 16, borderRadius: 12,
        background: CL.brandGreen, border: 0, color: '#fff',
        fontSize: 15, fontWeight: 800,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>Avançar para assinatura</button>
    </div>

    <CLTabBar active="inicio"/>
  </CLPage>
);

// ════════════════════════════════════════════════════════════
// CL TELA 5 — Assinar contrato (D4Sign)
// ════════════════════════════════════════════════════════════
const CLAssinarContratoScreen = () => (
  <CLPage>
    <CLHeader title="Assinatura digital" showBack/>

    {/* Card verde escuro com resumo + selo D4Sign */}
    <div style={{ padding: 16 }}>
      <div style={{
        background: CL.brandGreen, color: '#fff',
        borderRadius: 18, padding: '20px 18px',
        boxShadow: '0 6px 16px rgba(15,107,58,0.16)',
        position: 'relative', overflow: 'hidden',
      }}>
        <FoxWatermark opacity={0.10}/>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, position: 'relative', zIndex: 1 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.16)', display: 'grid', placeItems: 'center', fontSize: 18 }}>🔒</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800 }}>Assinatura via D4Sign</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.78)', marginTop: 2 }}>Validade MP 2.200-2 / 01.</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.18)', position: 'relative', zIndex: 1 }}>
          {[
            { l: 'CONTRATO', v: '#797564' },
            { l: 'PRODUTO', v: 'Soja' },
            { l: 'VALOR', v: 'R$ 135K' },
          ].map((c, i) => (
            <div key={c.l} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.18)' : 'none' }}>
              <div style={{ font: '700 9.5px Inter', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)' }}>{c.l}</div>
              <div style={{ fontSize: 15, fontWeight: 800, marginTop: 4 }}>{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Resumo do contrato em formato tabela */}
    <div style={{ padding: '0 16px 14px' }}>
      <div style={{ font: '700 11px Inter', color: CL.ink2, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, paddingLeft: 4 }}>O QUE VOCÊ ESTÁ ASSINANDO</div>
      <div style={{ background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`, overflow: 'hidden' }}>
        {[
          { l: 'Produto', v: 'Soja em grão' },
          { l: 'Quantidade', v: '1.233 sacas' },
          { l: 'Preço por saca', v: 'R$ 110,00' },
          { l: 'Valor global', v: 'R$ 135.630,00', big: true },
          { l: 'Local de retirada', v: 'Armazém José Renner' },
          { l: 'Janela de entrega', v: '01/05 a 31/05/2026' },
          { l: 'Prazo de pagamento', v: '7 dias após entrega' },
        ].map((r, i) => (
          <div key={r.l} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '12px 16px',
            borderTop: i === 0 ? 'none' : `1px solid ${CL.line}`,
            background: r.big ? CL.brandGreenSoft : '#fff',
          }}>
            <span style={{ fontSize: 12.5, color: CL.ink2 }}>{r.l}</span>
            <span style={{ fontSize: r.big ? 16 : 13, fontWeight: r.big ? 800 : 700, color: r.big ? CL.brandGreen : CL.ink, textAlign: 'right' }}>{r.v}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Caixa de assinatura */}
    <div style={{ padding: '0 16px 12px' }}>
      <div style={{ font: '700 11px Inter', color: CL.ink2, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10, paddingLeft: 4 }}>SUA ASSINATURA</div>
      <div style={{
        background: '#fff', border: `1.5px dashed ${CL.line}`,
        borderRadius: 14, padding: '24px 18px 14px', textAlign: 'center',
      }}>
        <svg width="200" height="58" viewBox="0 0 200 58" style={{ display: 'block', margin: '0 auto' }}>
          <path d="M5 42 Q15 8 28 26 T 56 30 Q 66 5 86 36 Q 100 48 116 22 T 146 28 Q 160 44 178 14 T 198 24"
                fill="none" stroke={CL.brandGreen} strokeWidth="2.8" strokeLinecap="round"/>
        </svg>
        <div style={{ borderBottom: `1px solid ${CL.line}`, marginTop: 6 }}/>
        <div style={{ fontSize: 12, color: CL.ink2, fontWeight: 700, marginTop: 8 }}>João Bertoldo</div>
        <div style={{ fontSize: 10.5, color: CL.ink3, marginTop: 2 }}>CPF 987.654.321-00</div>
      </div>
    </div>

    {/* Registro técnico */}
    <div style={{ padding: '0 16px 12px' }}>
      <div style={{ background: '#F7F7F2', borderRadius: 12, padding: '12px 14px' }}>
        <div style={{ font: '700 10px Inter', color: CL.ink3, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>REGISTRO TÉCNICO</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px' }}>
          {[
            ['Data', '21/05/2026'],
            ['Hora', '14:33 BRT'],
            ['IP', '189.78.34.122'],
            ['Hash', 'a1b2...e7f9'],
          ].map(([k, v]) => (
            <div key={k} style={{ fontSize: 11, color: CL.ink2 }}>
              <span style={{ color: CL.ink3, fontWeight: 600 }}>{k}</span>{' '}
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: CL.ink }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Aceite */}
    <div style={{ padding: '0 16px 12px' }}>
      <div style={{ background: CL.cardBg, border: `1px solid ${CL.line}`, borderRadius: 12, padding: 14, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ width: 22, height: 22, borderRadius: 6, background: CL.brandGreen, display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: 2 }}>
          <Icon name="check" size={14} color="#fff" stroke={3}/>
        </div>
        <div style={{ fontSize: 12.5, color: CL.ink2, lineHeight: 1.5 }}>
          Declaro que li o contrato, concordo com todas as cláusulas e autorizo a assinatura eletrônica via D4Sign.
        </div>
      </div>
    </div>

    {/* CTA */}
    <div style={{ padding: '0 16px 16px' }}>
      <button style={{
        width: '100%', padding: 16, borderRadius: 12,
        background: CL.brandGreen, border: 0, color: '#fff',
        fontSize: 15, fontWeight: 800,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>Assinar e finalizar a venda</button>
    </div>

    <CLTabBar active="inicio"/>
  </CLPage>
);

// ════════════════════════════════════════════════════════════
// CL TELA 5 — Sucesso
// ════════════════════════════════════════════════════════════
const CLSucessoVendaScreen = () => (
  <CLPage>
    <div style={{ height: 30 }}/>
    <div style={{ padding: '40px 24px 0', textAlign: 'center' }}>
      <div style={{ width: 110, height: 110, margin: '0 auto 24px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: CL.brandGreenSoft }}/>
        <div style={{ position: 'absolute', inset: 12, borderRadius: '50%', background: CL.brandGreen, display: 'grid', placeItems: 'center' }}>
          <Icon name="check" size={48} color="#fff" stroke={3.5}/>
        </div>
      </div>
      <div style={{ font: '800 11px Inter', color: CL.brandGreen, letterSpacing: '0.16em', marginBottom: 12 }}>CONTRATO ASSINADO</div>
      <h2 style={{ margin: '0 0 10px', fontSize: 24, fontWeight: 800, color: CL.ink, lineHeight: 1.2 }}>
        Sua venda foi finalizada.
      </h2>
      <p style={{ margin: 0, color: CL.ink2, fontSize: 14, lineHeight: 1.5, maxWidth: 290, marginInline: 'auto' }}>
        O contrato foi assinado via D4Sign. Você já pode acompanhar a entrega na aba Contratos.
      </p>
    </div>

    <div style={{ padding: '26px 16px 0' }}>
      <div style={{ background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`, padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <div style={{ font: '700 11px Inter', color: CL.ink3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>CONTRATO ASSINADO</div>
            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 5 }}>#797564</div>
          </div>
          <span style={{ padding: '5px 12px', borderRadius: 999, background: CL.brandGreenSoft, color: CL.brandGreen, fontSize: 11, fontWeight: 800 }}>Em andamento</span>
        </div>
        <div style={{ height: 1, background: CL.line, margin: '14px 0' }}/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <div style={{ font: '700 10px Inter', color: CL.ink3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PRODUTO</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 3 }}>Soja · 1.233 sc</div>
          </div>
          <div>
            <div style={{ font: '700 10px Inter', color: CL.ink3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>VALOR</div>
            <div style={{ fontSize: 14, fontWeight: 800, marginTop: 3, color: CL.brandGreen }}>R$ 135.630,00</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ padding: 16 }}>
      <button style={{
        width: '100%', padding: 16, borderRadius: 12,
        background: CL.brandGreen, border: 0, color: '#fff',
        fontSize: 15, fontWeight: 800,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>🚛 Agendar carga</button>
      <button style={{
        width: '100%', marginTop: 10, padding: 14, borderRadius: 12,
        background: CL.cardBg, border: `1px solid ${CL.line}`, color: CL.ink2,
        fontSize: 13.5, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>📄 Ver meu contrato</button>
    </div>

    <CLTabBar active="inicio"/>
  </CLPage>
);

// ════════════════════════════════════════════════════════════
// CL TELA 6 — Contratos com novo no topo
// ════════════════════════════════════════════════════════════
const CLContratosAposVendaScreen = () => (
  <CLPage>
    <CLHeader title="Contratos"/>

    {/* Card resumo verde escuro */}
    <div style={{ padding: 14 }}>
      <div style={{
        background: CL.brandGreen, color: '#fff',
        borderRadius: 14, padding: '16px 14px',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {[
            { l: 'CONTRATOS', v: '5' },
            { l: 'CONTRATADO', v: '88.000' },
            { l: 'EXECUTADO', v: '50.835', highlight: true },
          ].map((c, i) => (
            <div key={c.l} style={{
              textAlign: 'center',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.18)' : 'none',
              padding: '0 4px',
            }}>
              <div style={{ font: '500 9px Inter', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>{c.l}</div>
              <div style={{
                fontSize: 17, fontWeight: 700, marginTop: 4, letterSpacing: '-0.01em',
                color: c.highlight ? '#7BD89F' : '#fff',
              }}>{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Tabs */}
    <div style={{ marginBottom: 12 }}>
      <CLTabPills active={1}/>
    </div>

    {/* Product chips */}
    <div style={{ padding: '0 14px 14px', display: 'flex', gap: 6, overflowX: 'auto' }}>
      <CLProductChip emoji="🌽" label="Milho"/>
      <CLProductChip emoji="🌱" label="Soja"/>
      <CLProductChip emoji="🌰" label="Sorgo"/>
      <CLProductChip emoji="🚛" label="Frete"/>
      <CLProductChip emoji="🚜" label="Aluguel"/>
    </div>

    {/* Bloco do novo contrato em destaque (Maio De 2026) */}
    <div style={{ padding: '0 14px 14px' }}>
      <div style={{
        background: CL.brandGreen, color: '#fff',
        borderRadius: 14, padding: '18px 18px 18px',
      }}>
        <h3 style={{ margin: '0 0 10px', fontSize: 22, fontWeight: 800, letterSpacing: '-0.015em', color: '#fff' }}>Maio De 2026</h3>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.18)', borderRadius: 999, padding: '5px 11px', fontSize: 11.5, fontWeight: 600 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            1 contrato
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.18)', borderRadius: 999, padding: '5px 11px', fontSize: 11.5, fontWeight: 600 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            33 cargas
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 14 }}>
          <div style={{ background: '#F2F1EC', borderRadius: 10, padding: '14px 10px', textAlign: 'center' }}>
            <div style={{ font: '600 9.5px Inter', color: CL.ink3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>VOL. CONTRATADO</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4, color: CL.ink }}>1.233</div>
            <div style={{ fontSize: 10.5, color: CL.ink3, marginTop: 1 }}>sacas</div>
          </div>
          <div style={{ background: CL.brandGreenSoft, borderRadius: 10, padding: '14px 10px', textAlign: 'center' }}>
            <div style={{ font: '600 9.5px Inter', color: CL.brandGreen, letterSpacing: '0.1em', textTransform: 'uppercase' }}>VOL. EXECUTADO</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginTop: 4, color: CL.brandGreen }}>0</div>
            <div style={{ fontSize: 10.5, color: CL.brandGreen, marginTop: 1, opacity: 0.7 }}>sacas</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
          <button style={{
            padding: 12, borderRadius: 9,
            background: '#0A4A28', color: '#fff', border: 0,
            fontSize: 12.5, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Ver Contratos
          </button>
          <button style={{
            padding: 12, borderRadius: 9,
            background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.55)',
            fontSize: 12.5, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            Ver Tickets
          </button>
        </div>
      </div>
    </div>

    {/* Bloco mês anterior (normal — Julho 2026) */}
    <div style={{ padding: '0 14px 14px' }}>
      <div style={{
        background: CL.brandGreen, color: '#fff',
        borderRadius: 14, padding: '18px 18px 18px',
      }}>
        <h3 style={{ margin: '0 0 10px', fontSize: 22, fontWeight: 800, letterSpacing: '-0.015em', color: '#fff' }}>Julho De 2026</h3>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'rgba(255,255,255,0.18)', borderRadius: 999, padding: '5px 11px', fontSize: 11.5, fontWeight: 600 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          2 contratos
        </div>

        <div style={{ background: '#F2F1EC', borderRadius: 10, padding: '20px 16px', marginTop: 12, textAlign: 'center' }}>
          <div style={{ font: '600 10px Inter', color: CL.ink3, letterSpacing: '0.1em', textTransform: 'uppercase' }}>VOL. CONTRATADO</div>
          <div style={{ fontSize: 28, fontWeight: 800, marginTop: 5, letterSpacing: '-0.02em', color: CL.ink }}>20.000</div>
          <div style={{ fontSize: 11, color: CL.ink3, marginTop: 2 }}>sacas</div>
        </div>

        <button style={{
          width: '100%', marginTop: 10, padding: 13, borderRadius: 9,
          background: '#0A4A28', color: '#fff', border: 0,
          fontSize: 13, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Ver Contratos
        </button>
      </div>
    </div>

    <CLTabBar active="contratos"/>
  </CLPage>
);

// ════════════════════════════════════════════════════════════
// CL TELA 7 — Popup detalhe (tabela) do novo contrato
// ════════════════════════════════════════════════════════════
const CLDetalheContratoPopupScreen = () => (
  <div style={{ width: '100%', minHeight: '100%', background: 'rgba(15,30,20,0.55)', paddingTop: 44, position: 'relative' }}>
    <div style={{ padding: '120px 14px 0' }}>
      {/* Cabeçalho verde do popup */}
      <div style={{
        background: CL.brandGreen, color: '#fff',
        borderRadius: '14px 14px 0 0',
        padding: '18px 20px 22px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>Contratos</h2>
          <div style={{ fontSize: 13, opacity: 0.88, marginTop: 3 }}>Maio de 2026</div>
        </div>
        <button style={{
          width: 30, height: 30, borderRadius: 999,
          background: 'rgba(255,255,255,0.22)', border: 0, color: '#fff',
          fontSize: 16, fontWeight: 700, lineHeight: 1, cursor: 'pointer',
          padding: 0, display: 'grid', placeItems: 'center',
        }}>×</button>
      </div>

      {/* Tabela */}
      <div style={{ background: '#fff', borderRadius: '0 0 14px 14px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          display: 'grid', gridTemplateColumns: '0.85fr 0.85fr 1fr 1.1fr 1fr',
          padding: '12px 14px 10px',
          font: '700 9.5px Inter', letterSpacing: '0.08em', color: CL.ink3,
          textTransform: 'uppercase', gap: 6,
          borderBottom: `1px solid ${CL.line}`,
        }}>
          <span>ID</span>
          <span>PRODUTO</span>
          <span>VALOR</span>
          <span style={{ textAlign: 'right' }}>CONTRATADO</span>
          <span style={{ textAlign: 'right' }}>EXECUTADO</span>
        </div>

        {/* Linhas */}
        {[
          { id: '797564', prod: 'Soja', val: 'R$ 110,00', cont: '1.233', exec: '—' },
          { id: 'a0f747', prod: 'Milho', val: 'R$ 59,00', cont: '25.000', exec: '25.599' },
        ].map((r, i, arr) => (
          <div key={r.id} style={{
            display: 'grid', gridTemplateColumns: '0.85fr 0.85fr 1fr 1.1fr 1fr',
            padding: '14px 14px',
            borderBottom: i < arr.length - 1 ? `1px solid ${CL.line}` : 'none',
            alignItems: 'center', gap: 6,
          }}>
            <span style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace', fontWeight: 600, color: CL.ink, fontSize: 12.5 }}>{r.id}</span>
            <span style={{ fontSize: 13, color: CL.ink2, fontWeight: 500 }}>{r.prod}</span>
            <span style={{ fontSize: 12.5, color: CL.ink2, fontWeight: 500 }}>{r.val}</span>
            <span style={{ fontSize: 14, color: CL.ink, fontWeight: 600, textAlign: 'right' }}>{r.cont}</span>
            <span style={{ fontSize: 14, color: r.exec === '—' ? CL.ink3 : CL.brandGreen, fontWeight: 600, textAlign: 'right' }}>{r.exec}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ════════════════════════════════════════════════════════════
// CL TELA 8 — Detalhes da Carga (Ticket)
// ════════════════════════════════════════════════════════════
const CLDetalheCargaScreen = () => (
  <CLPage>
    <CLHeader title="Detalhes da Carga" showBack/>

    {/* Card principal do ticket */}
    <div style={{ padding: 14 }}>
      <div style={{
        background: CL.cardBg, borderRadius: 14, border: `1px solid ${CL.line}`,
        padding: '16px 18px',
      }}>
        {/* Top row: emoji caminhão + pill Ticket + Finalizado */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <span style={{ fontSize: 28 }}>🚛</span>
          <span style={{
            background: '#3098DA', color: '#fff', padding: '4px 14px', borderRadius: 999,
            fontSize: 13, fontWeight: 700,
          }}>Ticket</span>
          <span style={{
            marginLeft: 'auto',
            background: CL.brandGreen, color: '#fff', padding: '8px 18px', borderRadius: 10,
            fontSize: 14, fontWeight: 800, letterSpacing: '0.03em',
          }}>FINALIZADO</span>
        </div>

        <h2 style={{ margin: '6px 0 18px', fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>Ticket 5631</h2>

        {/* Informações */}
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800, color: CL.ink }}>Informações da Carga</h3>
        </div>

        <div style={{ background: '#fff', borderRadius: 8, border: `1px solid ${CL.line}`, overflow: 'hidden' }}>
          {[
            ['Data de Carregamento', '16/05/2026'],
            ['Motorista', 'REINALDO JUNIOR DE'],
            ['Placa', 'OBF-1C94'],
            ['Origem', 'GILMAR Serra da Giboia'],
            ['Peso Bruto', '869 sc'],
            ['Peso Líquido', '869 sc'],
          ].map(([k, v], i) => (
            <div key={k} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '11px 14px',
              borderTop: i === 0 ? 'none' : `1px solid ${CL.line}`,
              fontSize: 13.5,
            }}>
              <span style={{ color: CL.ink2 }}>{k}</span>
              <span style={{ fontWeight: 800, color: CL.ink, textAlign: 'right' }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <CLTabBar active="cargas"/>
  </CLPage>
);

Object.assign(window, {
  CL,
  CLHeader, CLTabBar, CLPage, CLProductChip, CLStatusBar, CLTabPills,
  CLDashboardVendaScreen,
  CLOfertaDetalheScreen,
  CLSelecionarQuantidadeScreen,
  CLRevisarContratoScreen,
  CLAssinarContratoScreen,
  CLSucessoVendaScreen,
  CLContratosAposVendaScreen,
  CLDetalheContratoPopupScreen,
  CLDetalheCargaScreen,
});
