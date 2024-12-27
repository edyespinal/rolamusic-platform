"use client";

import React from "react";
import { ArtistSubscriptionTier } from "@rola/services/schemas";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  Icon,
  Input,
} from "@rola/ui/components";
import { UseFieldArrayRemove, UseFormReturn } from "react-hook-form";
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
        <Icon name="trash" />
      </Button>
    </div>
  );
}

export { Perk };
