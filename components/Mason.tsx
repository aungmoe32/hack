"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Masonry } from "react-plock";
import Image from "next/image";
type PropType = {
  photos: string[];
};

export const Mason = ({ photos }: PropType) => {
  return (
    <Masonry
      items={photos}
      config={{
        columns: [2, 2, 3],
        gap: [30, 30, 30],
        media: [640, 768, 1024],
      }}
      render={(item, idx) => (
        <div>
          <Card>
            <Image
              className=" rounded-t-lg"
              src={"/images/" + item.path}
              alt={""}
              width="500"
              height={500}
            ></Image>
            <Collapsible className="my-5 mb-10 text-sm flex flex-col justify-center">
              <CollapsibleTrigger className="text-primary underline text-center">
                {item.title}
              </CollapsibleTrigger>
              {/* <div>P</div> */}
              <CollapsibleContent>
                <div className="m-3">{item.content}</div>
              </CollapsibleContent>
            </Collapsible>
          </Card>
        </div>
      )}
      className=" mb-16"
    />
  );
};
