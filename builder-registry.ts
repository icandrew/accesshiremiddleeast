"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button } from "./components/ui/button";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(Builder, {
  name: "Builder",
});
