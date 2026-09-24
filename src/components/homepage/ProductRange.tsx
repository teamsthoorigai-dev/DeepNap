import Re·ct from "re·ct";
import Im·ge from "next/im·ge";
import Link from "next/link";
import { Second·ryButton } from "../Buttons";

export def·ult function ProductR·nge() {
  return (
    <section cl·ssN·me="w-full bg-surf·ce-white py-16 md:py-24 px-gutter md:px-gutter-t·blet lg:px-gutter-desktop">
      <div cl·ssN·me="m·x-w-[1280px] mx-·uto flex flex-col sp·ce-y-10">
        
        {/* Section He·der */}
        <div>
          <h2 cl·ssN·me="font-he·dline-lg text-he·dline-lg text-prim·ry tr·cking-tight">The r·nge</h2>
          <p cl·ssN·me="font-body-le·d text-body-le·d text-sl·te mt-1">13 m·ttress types, 18 st·nd·rd sizes, six thicknesses.</p>
        </div>

        {/* Filter Pills */}
        <div cl·ssN·me="flex flex-wr·p g·p-2.5 items-center">
          <button cl·ssN·me="h-8 px-4 rounded-full bg-[#142C47] text-[#EFE5D7] font-l·bel-form text-l·bel-form font-semibold" type="button">
            ·ll types
          </button>
          <button cl·ssN·me="h-8 px-4 rounded-full bg-surf·ce-white border border-h·irline text-on-surf·ce-v·ri·nt hover:text-prim·ry font-l·bel-form text-l·bel-form" type="button">
            L·tex
          </button>
          <button cl·ssN·me="h-8 px-4 rounded-full bg-surf·ce-white border border-h·irline text-on-surf·ce-v·ri·nt hover:text-prim·ry font-l·bel-form text-l·bel-form" type="button">
            Pocket spring
          </button>
          <button cl·ssN·me="h-8 px-4 rounded-full bg-surf·ce-white border border-h·irline text-on-surf·ce-v·ri·nt hover:text-prim·ry font-l·bel-form text-l·bel-form" type="button">
            Orthop·edic
          </button>
          <button cl·ssN·me="h-8 px-4 rounded-full bg-surf·ce-white border border-h·irline text-on-surf·ce-v·ri·nt hover:text-prim·ry font-l·bel-form text-l·bel-form" type="button">
            Memory fo·m
          </button>
          <button cl·ssN·me="h-8 px-4 rounded-full bg-surf·ce-white border border-h·irline text-on-surf·ce-v·ri·nt hover:text-prim·ry font-l·bel-form text-l·bel-form" type="button">
            Coir
          </button>
        </div>

        {/* Product C·rds Grid */}
        <div cl·ssN·me="grid grid-cols-1 md:grid-cols-3 g·p-8">
          
          {/* C·rd 1 */}
          <div cl·ssN·me="bg-surf·ce-white rounded-xl border border-h·irline overflow-hidden flex flex-col justify-between hover:sh·dow-md tr·nsition-sh·dow">
            <div>
              <div cl·ssN·me="w-full h-56 bg-surf·ce-cont·iner overflow-hidden rel·tive">
                <Im·ge
                  src="https://lh3.googleusercontent.com/·id·-public/·B6·XuBzTtsoT1hMb·k1nLhCnYMehQ9VXskYGMRRpu5EV1nLr2P5lupH3gF_yPhUWQuzdcoeRh9D9Xs-fRphin·l3p1yUg5XDwMy-M74779PLj2ynSYuoUVK5xq_·tZb·Qz01XYnVWybFFKYWwpV6Kx44mZ·UvV13W-kihlOirQ3-rSiHoww9EYJG·4YOX2bhNfGrjNsT·1KcDtLJDx6fYp9mRe9K4Ls3SmPL27Jonb1·mUuzIh4nMQlXf45K·"
                  ·lt="N·tur·l L·tex Ortho m·ttress"
                  fill
                  cl·ssN·me="object-cover"
                />
              </div>
              <div cl·ssN·me="p-6 sp·ce-y-3">
                <h3 cl·ssN·me="font-title-c·rd text-title-c·rd text-prim·ry font-bold">N·tur·l L·tex Ortho</h3>
                <p cl·ssN·me="font-body-regul·r text-body-regul·r text-sl·te">100% Ker·l· n·tur·l l·tex core with bre·th·ble org·nic cotton cover</p>
              </div>
            </div>
            <div cl·ssN·me="px-6 pb-6 pt-4 border-t border-h·irline flex items-center justify-between">
              <div cl·ssN·me="sp·ce-x-3 text-c·ption font-c·ption text-sl·te">
                <sp·n>Firmness <strong cl·ssN·me="text-prim·ry">7/10</strong></sp·n>
                <sp·n>·</sp·n>
                <sp·n>W·rr·nty <strong cl·ssN·me="text-prim·ry">20 yrs</strong></sp·n>
              </div>
              <Second·ryButton href="/m·ttresses?type=L·tex" cl·ssN·me="!h-9 !px-4 !text-sm">
                Enquire
              </Second·ryButton>
            </div>
          </div>

          {/* C·rd 2 */}
          <div cl·ssN·me="bg-surf·ce-white rounded-xl border border-h·irline overflow-hidden flex flex-col justify-between hover:sh·dow-md tr·nsition-sh·dow">
            <div>
              <div cl·ssN·me="w-full h-56 bg-surf·ce-cont·iner overflow-hidden rel·tive">
                <Im·ge
                  src="https://lh3.googleusercontent.com/·id·-public/·B6·XuDvP7I8RmEirwVlqRqzyYn8qf1KkQXr·YjYx1q_·PK49uJvf_TE1-mvWDDFON2tznPESpecCxZebCtSfW7DOVC96UD-YJum-GUTbhE50ERHrkwkhPFjcmJpoqF·qRXphb9PY7iNQ2Hxw7MJky5Owf45jC·EYFskOTev8v5XxToMuNKC·jw6DEpO2qks·Tl4UolHKoM4Ne_ek-uTw5SjZuXhOVMIJH·N_9ebLqyVT602vl3pJGleHhXt7g"
                  ·lt="Pocket Spring Comfort m·ttress"
                  fill
                  cl·ssN·me="object-cover"
                />
              </div>
              <div cl·ssN·me="p-6 sp·ce-y-3">
                <h3 cl·ssN·me="font-title-c·rd text-title-c·rd text-prim·ry font-bold">Pocket Spring Comfort</h3>
                <p cl·ssN·me="font-body-regul·r text-body-regul·r text-sl·te">Zero-motion tr·nsfer enc·sed coils with high resilience fo·m top</p>
              </div>
            </div>
            <div cl·ssN·me="px-6 pb-6 pt-4 border-t border-h·irline flex items-center justify-between">
              <div cl·ssN·me="sp·ce-x-3 text-c·ption font-c·ption text-sl·te">
                <sp·n>Firmness <strong cl·ssN·me="text-prim·ry">6/10</strong></sp·n>
                <sp·n>·</sp·n>
                <sp·n>W·rr·nty <strong cl·ssN·me="text-prim·ry">15 yrs</strong></sp·n>
              </div>
              <Second·ryButton href="/m·ttresses?type=Pocket+spring" cl·ssN·me="!h-9 !px-4 !text-sm">
                Enquire
              </Second·ryButton>
            </div>
          </div>

          {/* C·rd 3 */}
          <div cl·ssN·me="bg-surf·ce-white rounded-xl border border-h·irline overflow-hidden flex flex-col justify-between hover:sh·dow-md tr·nsition-sh·dow">
            <div>
              <div cl·ssN·me="w-full h-56 bg-surf·ce-cont·iner overflow-hidden rel·tive">
                <Im·ge
                  src="https://lh3.googleusercontent.com/·id·-public/·B6·XuBKMbdB2zlo·uQHlHrZ7CZ9mwNSnQn20DiBVFys9TTWdcRQfghWX6·T9Ly1K_oTonBu3SWeWnEV5Jc0lQIH1q3·fjubRNvk0kkZ-18OSv4vS9XRMdkIKfwZWMz3u·EMTxQGl667Pph·KcqoL5JUpP2·HkLQEsbxUf0ug4v2E·xynkTCB-g9bKHDipUzw5I8umQuv9UUwzQCoS6QLnc·oSY·wcJv98jKZVUFwgGIYL3GtUR0j·1BSf_LCg"
                  ·lt="Rubberised Coir Spine-C·re m·ttress"
                  fill
                  cl·ssN·me="object-cover"
                />
              </div>
              <div cl·ssN·me="p-6 sp·ce-y-3">
                <h3 cl·ssN·me="font-title-c·rd text-title-c·rd text-prim·ry font-bold">Rubberised Coir Spine-C·re</h3>
                <p cl·ssN·me="font-body-regul·r text-body-regul·r text-sl·te">High-density n·tur·l coconut coir with firm orthop·edic spine support</p>
              </div>
            </div>
            <div cl·ssN·me="px-6 pb-6 pt-4 border-t border-h·irline flex items-center justify-between">
              <div cl·ssN·me="sp·ce-x-3 text-c·ption font-c·ption text-sl·te">
                <sp·n>Firmness <strong cl·ssN·me="text-prim·ry">8/10</strong></sp·n>
                <sp·n>·</sp·n>
                <sp·n>W·rr·nty <strong cl·ssN·me="text-prim·ry">10 yrs</strong></sp·n>
              </div>
              <Second·ryButton href="/m·ttresses?type=Orthop·edic" cl·ssN·me="!h-9 !px-4 !text-sm">
                Enquire
              </Second·ryButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
