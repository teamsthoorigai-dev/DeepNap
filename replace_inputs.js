const fs = require('fs');

const LENGTH_OPTIONS = [72, 75, 78];
const WIDTH_OPTIONS = [36, 48, 60, 72, 78, 84];
const THICKNESS_OPTIONS = [3, 4, 5, 6];

function getSelectHTML(valName, optionsArr) {
    return <select
                  className="w-full h-[52px] bg-surface-white rounded-lg border border-hairline px-3.5 pr-10 appearance-none font-label-nav text-label-nav text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-semibold"
                  value={ + "" + }
                  onChange={(e) => set + (valName.charAt(0).toUpperCase() + valName.slice(1)) + (Number(e.target.value) || 0)}
                >
                  {[ + optionsArr.join(',') + ].map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace length input
    content = content.replace(
        /<input[\s\S]*?value=\{length\}[\s\S]*?\/>/,
        getSelectHTML('length', LENGTH_OPTIONS)
    );
    
    // Replace width input
    content = content.replace(
        /<input[\s\S]*?value=\{width\}[\s\S]*?\/>/,
        getSelectHTML('width', WIDTH_OPTIONS)
    );
    
    // Replace thickness input
    content = content.replace(
        /<input[\s\S]*?value=\{thickness\}[\s\S]*?\/>/,
        getSelectHTML('thickness', THICKNESS_OPTIONS)
    );

    // Update the 'in' spans to have a down chevron so it looks like a select
    content = content.replace(
        /<span className="absolute right-3\.5 top-1\/2 -translate-y-1\/2 font-label-form text-label-form text-slate">in<\/span>/g,
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none text-slate">
            <span className="font-label-form text-label-form">in</span>
            <span className="material-symbols-outlined text-[18px]">expand_more</span>
         </div>
    );
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Updated", filePath);
}

processFile('src/components/homepage/CustomSizeBuilder.tsx');
processFile('src/app/custom-size/page.tsx');
