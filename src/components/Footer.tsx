export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-card">
      <div className="container-wide mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              className="h-[40px] w-auto"
            />
          </div>


          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Thryv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
