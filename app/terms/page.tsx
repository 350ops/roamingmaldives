export default function TermsPage() {
  return (
    <div className="section-shell min-h-screen">
      <div className="page-shell max-w-4xl">
        <div className="surface-panel p-7 sm:p-10">
          <p className="muted-label">Terms of service</p>
          <h1 className="display-title mt-5">General terms for using Roaming Maldives.</h1>
          <div className="article-prose mt-8 max-w-none">
            <p>
              Roaming Maldives provides information about device compatibility, setup guidance, and
              travel connectivity options for the Maldives. Availability, pricing, and network
              access may vary by plan and partner network.
            </p>
            <p>
              Travellers are responsible for confirming that their device is unlocked and eSIM
              compatible before purchase. Coverage can vary by island, atoll, vessel location, and
              local network conditions.
            </p>
            <p>
              For support or questions about these terms, contact
              <a href="mailto:hello@roamingmaldives.com?subject=Terms%20question"> hello@roamingmaldives.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
