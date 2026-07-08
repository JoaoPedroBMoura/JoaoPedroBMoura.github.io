/**
 * Footer — rodapé do portfólio
 */

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-laranja)',
        padding: '20px 24px',
        textAlign: 'center',
      }}
    >
      <p style={{ margin: 0, color: 'var(--color-preto)', fontWeight: 600, fontSize: '0.9rem' }}>
        © 2026 João Pedro Barcellos Moura
      </p>
    </footer>
  );
}

export default Footer;
