"use client";

import React from "react";
import { UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  Input,
} from "@rola/ui/components";
import { TrashIcon } from "@rola/ui/icons";
import { FormValues } from "../types";

function Perk({
  form,
  tierIndex: index,
  perkIndex,
  isEditable,
  removePerk,
}: {
  form: UseFormReturn<FormValues, any, undefined>;
  tierIndex: number;
  perkIndex: number;
  isEditable: boolean;
  removePerk: UseFieldArrayRemove;
}) {
  return (
    <div className="flex items-center gap-4">
      <FormField
        control={form.control}
        name={`tiers.${index}.perks.${perkIndex}.name`}
        render={({ field }) => (
          <FormItem className="grow">
            <FormControl>
              <Input type="text" disabled={!isEditable} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        variant="destructive"
        size="icon"
        disabled={!isEditable}
        className="flex-none"
        onClick={() => {
          if (!isEditable) {
            return;
          }

          removePerk(perkIndex);
        }}
      >
        <TrashIcon />
      </Button>
    </div>
  );
}

export { Perk };
