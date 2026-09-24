import re

file_path = "src/app/mattresses/page.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix the Rupee symbol if it's broken
content = content.replace("?{product.priceFrom", "₹{product.priceFrom")
content = content.replace("", "") # in case

# Find the block starting with `<div className="flex items-center justify-between mb-4">`
# and ending before `<div className="mt-auto flex flex-col gap-4 pt-4 border-t border-hairline">`
start_marker = '<div className="flex items-center justify-between mb-4">'
end_marker = '<div className="mt-auto flex flex-col gap-4 pt-4 border-t border-hairline">'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_grid = """<div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
                      {/* Top-Left: Rating */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Rating</div>
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px] text-[#DCA544]">star</span>
                          <span className="font-label-nav text-label-nav font-bold text-primary text-[12px] md:text-sm">4.8/5 <span className="font-normal text-xs text-slate">(120+)</span></span>
                        </div>
                      </div>
                      {/* Top-Right: Firmness */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Firmness</div>
                        <div className="flex items-center gap-1">
                          <div className="w-8 h-1.5 bg-surface-container rounded-full overflow-hidden shrink-0">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${(product.firmness / 10) * 100}%` }}
                            ></div>
                          </div>
                          <span className="font-label-nav text-label-nav font-bold text-primary text-[12px] whitespace-nowrap">{product.firmness}/10</span>
                        </div>
                      </div>
                      {/* Bottom-Left: Thickness */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Thickness</div>
                        <div className="font-label-nav text-label-nav font-semibold text-primary text-[12px] md:text-sm">{product.thicknesses}</div>
                      </div>
                      {/* Bottom-Right: Warranty */}
                      <div>
                        <div className="font-caption text-caption text-slate uppercase tracking-wider mb-1">Warranty</div>
                        <div className="font-label-nav text-label-nav font-semibold text-primary text-[12px] md:text-sm">{product.warranty}</div>
                      </div>
                    </div>

                    """
    
    content = content[:start_idx] + new_grid + content[end_idx:]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully")
else:
    print("Markers not found")
