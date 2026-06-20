export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function smoothScrollTo(id: string) {
  const element = document.getElementById(id.replace("#", ""));
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
