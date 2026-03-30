import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import FilterSkeleton from "@/components/loadings/filter-skeleton";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CommentsFormField from "@/features/comments/components/comments-form-field";
import PestsFormField from "@/features/pests/components/pests-form-field";
import ProductionsFormField from "@/features/productions/components/productions-form-field";
import TagsFormField from "@/features/tags/components/tags-form-field";
import useCustomQueries from "@/hooks/use-custom-queries";
import { cn } from "@/lib/utils";
import { dataUtils } from "@/utils/data";

import type { QnaFilterHookFormTypes } from "./filter-hookform";

import { QnaFilterHookForm } from "./filter-hookform";

function QnaFilterForm({
  data,
  count,
  onSubmit,
  onClear,
}: {
  data: QnaFilterHookFormTypes;
  count: number;
  onSubmit: (data: QnaFilterHookFormTypes) => void;
  onClear: () => void;
}) {
  const [hasFilters, setHasFilters] = useState(false);
  const { isFetching } = useCustomQueries();

  const form = useForm<QnaFilterHookFormTypes>({
    defaultValues: {
      ...data,
      ...QnaFilterHookForm.defaultValues,
    },
  });

  const formValues = useWatch({
    control: form.control,
  });

  const hasAnimation = useMemo(() => dataUtils.countFilter(QnaFilterHookForm.defaultValues, formValues) > 0, [formValues]);

  useEffect(() => {
    form.reset({

      ...QnaFilterHookForm.defaultValues,
      ...data,
    });
  }, [data]);

  return (
    <Sheet open={hasFilters} onOpenChange={setHasFilters}>
      <ButtonGroup>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            Filters
            {count !== 0 && <span className="absolute bg-green-700 text-xs text-white rounded-full w-4 h-4 -top-1 shadow-sm right-0 flex items-center justify-center animate-bounce ">{count}</span>}
          </Button>
        </SheetTrigger>

        <Button onClick={onClear} variant="destructive">
          Clear
        </Button>
      </ButtonGroup>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>QNA filters</SheetTitle>
          <SheetDescription>Filter QNA datas easily</SheetDescription>
        </SheetHeader>

        {hasFilters && (
          <ScrollArea className="h-[80%] px-5">
            {isFetching
              ? (
                  <FilterSkeleton />
                )
              : (
                  <Form {...form}>
                    <form
                      id="qna-filter-form"

                      onSubmit={form.handleSubmit((data) => {
                        onSubmit(data);
                        setHasFilters(false);
                      })}
                    >
                      <TagsFormField form={form} name="tag" />
                      <CommentsFormField form={form} name="comment" />
                      <ProductionsFormField form={form} name="production" />
                      <PestsFormField form={form} name="pests" />
                    </form>
                  </Form>
                )}
          </ScrollArea>
        )}

        <SheetFooter>
          <div className="space-x-2 ">

            <Button form="qna-filter-form" className={cn("w-auto", hasAnimation && "animate-bounce")} type="submit">Filter</Button>

            <SheetClose asChild>
              <Button
                variant="outline"
                onClick={onClear}
              >
                Clear
              </Button>
            </SheetClose>
          </div>

        </SheetFooter>

      </SheetContent>

    </Sheet>
  );
}

export default QnaFilterForm;
