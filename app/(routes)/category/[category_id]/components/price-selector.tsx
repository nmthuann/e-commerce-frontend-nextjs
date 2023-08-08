// "use client"

// import * as React from "react"
// import { SliderProps } from "@radix-ui/react-slider"

// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"
// import { Label } from "@/components/ui/label"
// import { Slider } from "@/components/ui/slider"

// interface PriceSelectorProps {
//   defaultValue: SliderProps["defaultValue"]
// }

// export function PriceSelector({ defaultValue }: PriceSelectorProps) {
//   const [value, setValue] = React.useState(defaultValue)

//   return (
//     <div className="grid gap-2 pt-2">
//       <HoverCard openDelay={200}>
//         <HoverCardTrigger asChild>
//           <div className="grid gap-4">
//             <div className="flex items-center justify-between">
//               <Label htmlFor="price">Price</Label>
//               <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
//                 {value}
//               </span>
//             </div>
//             <Slider
//               id="price"
//               max={1000}
//               defaultValue={value}
//               step={1}
//               onValueChange={setValue}
//               className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
//               aria-label="Price"
//             />
//           </div>
//         </HoverCardTrigger>
//         <HoverCardContent
//           align="start"
//           className="w-[260px] text-sm"
//           side="left"
//         >
//           price: lowering results in less random completions. As
//           the Price approaches zero, the model will become deterministic
//           and repetitive.
//         </HoverCardContent>
//       </HoverCard>
//     </div>
//   )
// }