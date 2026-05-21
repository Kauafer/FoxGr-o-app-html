// Fox Grãos — shared primitives, icons, theme

const FG = {
  green: '#00683C',
  greenDeep: '#024A2C',
  greenLeaf: '#1F8A5B',
  greenMint: '#E4F0E9',
  green50: '#F1F7F3',
  red: '#C8102E',
  paper: '#F7F5F0',
  paper2: '#EFEBE2',
  surface: '#FFFFFF',
  line: '#E6E0D3',
  ink: '#14180F',
  ink2: '#3A3F33',
  ink3: '#7A7F71',
  ink4: '#B0B4A6',
  stProd: '#1F8A5B',  stProdBg: '#DEF1E7',
  stWarn: '#C99300',  stWarnBg: '#FAEFD0',
  stRisk: '#D84A2A',  stRiskBg: '#FBE5DE',
  stInfo: '#2E5BFF',  stInfoBg: '#E6ECFF',
};

// ─── Icons (1.7 stroke, line-style; minimal set) ────────────
const Icon = ({ name, size = 20, color = 'currentColor', stroke = 1.7 }) => {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'home': return <svg {...props}><path d="M3 11l9-7 9 7v9a2 2 0 01-2 2h-4v-7h-6v7H5a2 2 0 01-2-2z"/></svg>;
    case 'grid': return <svg {...props}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>;
    case 'clip': return <svg {...props}><rect x="7" y="4" width="10" height="18" rx="2"/><path d="M9 4h6v3H9z" fill={color} stroke="none"/><path d="M9 12h6M9 16h4"/></svg>;
    case 'user': return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>;
    case 'briefcase': return <svg {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/></svg>;
    case 'badge': return <svg {...props}><circle cx="12" cy="9" r="5"/><path d="M9 13.5L7 21l5-3 5 3-2-7.5"/></svg>;
    case 'star': return <svg {...props}><path d="M12 3l2.7 5.5 6 .9-4.4 4.3 1 6L12 17l-5.4 2.7 1-6L3.3 9.4l6-.9z"/></svg>;
    case 'id': return <svg {...props}><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h5M14 14h3"/></svg>;
    case 'truck': return <svg {...props}><rect x="2" y="7" width="11" height="9" rx="1"/><path d="M13 10h4l3 3v3h-7zM6 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z"/></svg>;
    case 'doc': return <svg {...props}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></svg>;
    case 'plus': return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case 'arrow-left': return <svg {...props}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>;
    case 'arrow-right': return <svg {...props}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
    case 'arrow-up-right': return <svg {...props}><path d="M7 17L17 7M7 7h10v10"/></svg>;
    case 'arrow-down-right': return <svg {...props}><path d="M7 7l10 10M17 7v10H7"/></svg>;
    case 'logout': return <svg {...props}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>;
    case 'check': return <svg {...props}><path d="M5 12l5 5L20 7"/></svg>;
    case 'check-circle': return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>;
    case 'chevron-down': return <svg {...props}><path d="M6 9l6 6 6-6"/></svg>;
    case 'chevron-right': return <svg {...props}><path d="M9 6l6 6-6 6"/></svg>;
    case 'search': return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg>;
    case 'filter': return <svg {...props}><path d="M3 5h18l-7 9v6l-4-2v-4z"/></svg>;
    case 'wheat': return <svg {...props}><path d="M12 22V8M8 14c0-3 1.8-5 4-5M16 14c0-3-1.8-5-4-5M7 18c0-3 2-5 5-5M17 18c0-3-2-5-5-5M9 10c0-2 1.3-4 3-4M15 10c0-2-1.3-4-3-4"/></svg>;
    case 'sparkle': return <svg {...props}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4.2 4.2M14.2 14.2l4.2 4.2M5.6 18.4l4.2-4.2M14.2 9.8l4.2-4.2"/></svg>;
    case 'info': return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 8v.01M12 12v4"/></svg>;
    case 'bell': return <svg {...props}><path d="M6 8a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9zM10 21a2 2 0 004 0"/></svg>;
    case 'pkg': return <svg {...props}><path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"/></svg>;
    case 'users': return <svg {...props}><circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7"/><circle cx="17" cy="6" r="2.5"/><path d="M22 17c0-2.8-2.2-5-5-5"/></svg>;
    case 'dollar': return <svg {...props}><path d="M12 2v20M17 7H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>;
    case 'trend-up': return <svg {...props}><path d="M3 17l6-6 4 4 8-8M14 7h7v7"/></svg>;
    case 'cargo-stack': return <svg {...props}><rect x="3" y="10" width="8" height="11"/><rect x="13" y="6" width="8" height="15"/><rect x="3" y="3" width="8" height="6"/></svg>;
    case 'leaf': return <svg {...props}><path d="M11 20a8 8 0 008-8V4h-8a8 8 0 00-8 8 8 8 0 008 8zM3 21l9-9"/></svg>;
    default: return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
};

// ─── Status pill ────────────────────────────────────────────
const Pill = ({ tone = 'prod', children, icon, style = {} }) => {
  const map = {
    prod: { bg: FG.stProdBg, fg: FG.stProd },
    warn: { bg: FG.stWarnBg, fg: FG.stWarn },
    risk: { bg: FG.stRiskBg, fg: FG.stRisk },
    info: { bg: FG.stInfoBg, fg: FG.stInfo },
    mint: { bg: FG.greenMint, fg: FG.green },
    ink: { bg: FG.ink, fg: '#fff' },
  };
  const c = map[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '4px 9px', borderRadius: 999,
      background: c.bg, color: c.fg,
      fontSize: 11, fontWeight: 600, letterSpacing: 0.1,
      ...style,
    }}>
      {icon}
      {children}
    </span>
  );
};

// Small dot
const Dot = ({ color, size = 6 }) => (
  <span style={{ width: size, height: size, borderRadius: 999, background: color, display: 'inline-block' }} />
);

// ─── Mobile chrome shell ───────────────────────────────────
// A 390-wide container that mimics iOS safe areas + status bar handled by IOSDevice.
// Pages render inside this content area (top padding accounts for status bar).
const Page = ({ children, bg = FG.paper, style = {} }) => (
  <div style={{
    width: '100%', minHeight: '100%',
    background: bg, color: FG.ink,
    fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
    paddingTop: 56, // status bar
    paddingBottom: 110, // home indicator + bottom nav
    ...style,
  }}>{children}</div>
);

// Page header: large title with optional eyebrow + back/icon
const PageHeader = ({ eyebrow, title, subtitle, onBack, action, dark = false, illustration }) => {
  const fg = dark ? '#fff' : FG.ink;
  const muted = dark ? 'rgba(255,255,255,0.7)' : FG.ink3;
  return (
    <div style={{ padding: '12px 20px 18px', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        {onBack ? (
          <button style={{
            width: 38, height: 38, borderRadius: 12,
            background: FG.surface, border: `1px solid ${FG.line}`,
            display: 'grid', placeItems: 'center', cursor: 'pointer',
          }}><Icon name="arrow-left" size={18} color={FG.ink}/></button>
        ) : <div style={{ width: 0 }}/>}
        <div style={{ flex: 1 }}>
          {eyebrow && <div style={{
            font: '600 10.5px/1 "JetBrains Mono", monospace',
            color: muted, letterSpacing: '0.18em', textTransform: 'uppercase',
          }}>{eyebrow}</div>}
        </div>
        {action}
      </div>
      <h1 style={{
        margin: 0, fontSize: 30, fontWeight: 700, letterSpacing: '-0.025em',
        color: fg, lineHeight: 1.05,
      }}>{title}</h1>
      {subtitle && <p style={{
        margin: '8px 0 0', fontSize: 14.5, color: muted, lineHeight: 1.4, maxWidth: 320,
      }}>{subtitle}</p>}
      {illustration}
    </div>
  );
};

// Bottom tab bar
const TabBar = ({ active = 'dashboard' }) => {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
    { id: 'pendencias', label: 'Pendências', icon: 'clip' },
    { id: 'perfil', label: 'Perfil', icon: 'user' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 12, right: 12, bottom: 22,
      background: FG.surface, borderRadius: 24,
      boxShadow: '0 10px 30px rgba(20,24,15,0.08), 0 0 0 1px rgba(20,24,15,0.04)',
      padding: '8px 8px', display: 'flex', gap: 6,
    }}>
      {tabs.map(t => {
        const on = t.id === active;
        return (
          <button key={t.id} style={{
            flex: 1, border: 0, background: on ? FG.greenMint : 'transparent',
            color: on ? FG.green : FG.ink3,
            borderRadius: 16, padding: '10px 6px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            cursor: 'pointer',
          }}>
            <Icon name={t.icon} size={20} color={on ? FG.green : FG.ink3} stroke={on ? 2 : 1.6}/>
            <span style={{ fontSize: 11, fontWeight: on ? 700 : 500 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// Card
const Card = ({ children, style = {}, padding = 18 }) => (
  <div style={{
    background: FG.surface, borderRadius: 18,
    padding,
    boxShadow: '0 1px 0 rgba(20,24,15,0.03), 0 4px 16px rgba(20,24,15,0.04)',
    border: `1px solid ${FG.line}`,
    ...style,
  }}>{children}</div>
);

// Stat card with status color
const Stat = ({ tone = 'ink', label, value, sub, icon, style = {} }) => {
  const map = {
    prod: FG.stProd, warn: FG.stWarn, risk: FG.stRisk, info: FG.stInfo,
    green: FG.green, ink: FG.ink,
  };
  const c = map[tone] || FG.ink;
  return (
    <Card padding={16} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
        <span style={{ width: 7, height: 7, borderRadius: 2, background: c }}/>
        <span style={{
          font: '600 10px/1 "JetBrains Mono", monospace',
          letterSpacing: '0.16em', color: FG.ink3, textTransform: 'uppercase',
        }}>{label}</span>
        {icon && <span style={{ marginLeft: 'auto', color: FG.ink4 }}>{icon}</span>}
      </div>
      <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.02em', color: FG.ink, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: FG.ink3, marginTop: 6 }}>{sub}</div>}
    </Card>
  );
};

// Section header
const SectionTitle = ({ children, action, style = {} }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '6px 20px 10px', ...style }}>
    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, letterSpacing: '-0.005em' }}>{children}</h3>
    {action}
  </div>
);

// Eyebrow text
const Eyebrow = ({ children, color = FG.ink3 }) => (
  <div style={{
    font: '600 10px/1 "JetBrains Mono", monospace',
    letterSpacing: '0.2em', textTransform: 'uppercase', color,
  }}>{children}</div>
);

Object.assign(window, { FG, Icon, Pill, Dot, Page, PageHeader, TabBar, Card, Stat, SectionTitle, Eyebrow });
