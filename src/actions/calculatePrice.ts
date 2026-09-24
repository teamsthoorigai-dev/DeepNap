export async function calculateIndicativePrice(length: number, width: number, thickness: number): Promise<number> {
  // Runs in the browser: the site is exported as static files, so there is no server to run it on.
  // The indicative pricing formula provided by the prompt: L * W * T * 0.76 (rounded to nearest 100)
  
  if (!length || !width || !thickness) return 0;
  
  const rawPrice = length * width * thickness * 0.76;
  const roundedPrice = Math.round(rawPrice / 100) * 100;
  
  return roundedPrice;
}
