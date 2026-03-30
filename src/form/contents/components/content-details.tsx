// import type { UseFormReturn } from "react-hook-form";

// import { Loader } from "lucide-react";
// import { useMemo } from "react";

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { MultiSelect, MultiSelectContent, MultiSelectGroup, MultiSelectItem, MultiSelectTrigger, MultiSelectValue } from "@/components/ui/multi-select";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { GENERAL } from "@/constants/general";
// import OrganizationsFormField from "@/features/organizations/components/organizations-form-field";
// import PestsFormField from "@/features/pests/components/pests-form-field";
// import ProductionsFormField from "@/features/productions/components/productions-form-field";
// import TagsFormField from "@/features/tags/components/tags-form-field";
// import { cn } from "@/lib/utils";

// import type { ContentFormType } from "../hookform";

// type ContentDetailsType = {
//   form: UseFormReturn<ContentFormType>;

//   serie_id: string | number | undefined;
//   for_learning_series: string | number | undefined;

//   isMainContentTypeLoading: boolean;
//   mainContentType?: any[];

//   isSubContentTypeLoading: boolean;
//   subContentType?: any[];

//   isProductionOptionsLoading: boolean;
//   productionOptions?: any[];

//   isPestNamesLoading: boolean;
//   pestNames?: any[];

//   isTagsLoading: boolean;
//   tags?: any[];

//   isSeriesForDropdownLoading: boolean;
//   seriesForDropdown?: any[];

//   isAppUserGroupsLoading: boolean;
//   appUserGroups?: any[];

//   isFormLoading: boolean;
//   forms?: any[];

//   isSystemUsersForDropdownLoading: boolean;
//   systemUsersForDropdown?: any[];
// };

// function ContentDetails({
//   form,

//   for_learning_series,
//   serie_id,

//   isMainContentTypeLoading,
//   mainContentType = [],

//   isSubContentTypeLoading,
//   subContentType = [],

//   // These are now handled by TagsFormField
//   // isTagsLoading,
//   // tags = [],

//   isSeriesForDropdownLoading,
//   seriesForDropdown = [],

//   isAppUserGroupsLoading,
//   appUserGroups = [],

//   isFormLoading,
//   forms = [],

//   isSystemUsersForDropdownLoading,
//   systemUsersForDropdown = [],
// }: ContentDetailsType) {
//   const hasSerieOrderAndReadingTimes = useMemo(() => for_learning_series === GENERAL.VERIFIED[2].value && serie_id, [for_learning_series, serie_id]);

//   return (

//     <Card>
//       <CardHeader>
//         <CardTitle>
//           Content
//         </CardTitle>
//         <CardDescription>Update</CardDescription>
//       </CardHeader>

//       <CardContent>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 mb-5">
//           <FormField
//             control={form.control}
//             name="main_content_type"
//             render={({ field }) => (
//               <FormItem className="w-full">
//                 <FormLabel>Main content type *</FormLabel>
//                 <FormControl>
//                   <Select
//                     onValueChange={(value) => {
//                       field.onChange(value);
//                       form.setValue("content_type", "");
//                     }}
//                     value={field.value}
//                   >
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select user type" />
//                     </SelectTrigger>

//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>Main content types</SelectLabel>
//                         {
//                           isMainContentTypeLoading && <Loader className="animate-spin" />
//                         }
//                         {
//                           mainContentType && mainContentType.length > 0 && mainContentType.map((data: { name: string; id: number }) => <SelectItem value={data.id.toString()} key={data.id}>{data.name}</SelectItem>)
//                         }
//                       </SelectGroup>
//                     </SelectContent>

//                   </Select>

//                 </FormControl>

//                 <div className="min-h-5 pt-1">
//                   <FormMessage />
//                 </div>
//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="content_type"
//             render={({ field }) => (
//               <FormItem className="w-full">
//                 <FormLabel>Sub content type *</FormLabel>
//                 <FormControl>
//                   <Select
//                     onValueChange={field.onChange}
//                     value={field.value}

//                   >
//                     <SelectTrigger className="w-full" disabled={subContentType.length <= 0}>
//                       <SelectValue placeholder="Select user type" />
//                     </SelectTrigger>

//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>Sub content types</SelectLabel>
//                         {
//                           isSubContentTypeLoading && <Loader className="animate-spin" />
//                         }
//                         {
//                           subContentType && subContentType.length > 0 && subContentType.map((data: { name: string; id: number }) => <SelectItem value={data.id.toString()} key={data.id}>{data.name}</SelectItem>)
//                         }
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </FormControl>

//                 <div className="min-h-5 pt-1">
//                   <FormMessage />
//                 </div>
//               </FormItem>
//             )}
//           />

//           <ProductionsFormField
//             form={form}
//             name="productions"
//           />

//           <PestsFormField name="pests" form={form} />

//           <TagsFormField
//             form={form}
//             name="tags"
//             isRequired={false}
//           />

//           <div />

//           <div className={cn("col-span-3 grid grid-cols-3 gap-x-10 gap-y-5", hasSerieOrderAndReadingTimes && "p-5 bg-gray-50 rounded-lg border")}>
//             <FormField
//               control={form.control}
//               name="for_learning_series"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>For learning series</FormLabel>
//                   <FormControl>
//                     <Select
//                       onValueChange={(value) => {
//                         field.onChange(value);
//                         form.setValue("serie_id", "");
//                       }}
//                       value={field.value}
//                     >
//                       <SelectTrigger className="w-full">
//                         <SelectValue placeholder="Select learning series" />
//                       </SelectTrigger>

//                       <SelectContent>
//                         <SelectGroup>
//                           <SelectLabel>For learning series</SelectLabel>

//                           {
//                             GENERAL.VERIFIED.filter(data => data.value !== GENERAL.FILTER_OFF).map((data: { label: string; value: string }) => <SelectItem value={data.value} key={data.value}>{data.label}</SelectItem>)
//                           }
//                         </SelectGroup>
//                       </SelectContent>
//                     </Select>
//                   </FormControl>

//                   <div className="min-h-5 pt-1">
//                     <FormMessage />
//                   </div>
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="serie_id"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>Add to series</FormLabel>
//                   <FormControl>
//                     <Select
//                       onValueChange={field.onChange}
//                       value={field.value}
//                     >
//                       <SelectTrigger className="w-full" disabled={seriesForDropdown.length <= 0}>
//                         <SelectValue placeholder="Select user type" />
//                       </SelectTrigger>

//                       <SelectContent>
//                         <SelectGroup>
//                           <SelectLabel>Series</SelectLabel>
//                           {
//                             isSeriesForDropdownLoading && <Loader className="animate-spin" />
//                           }
//                           {
//                             seriesForDropdown && seriesForDropdown.length > 0 && seriesForDropdown.map((data: { name: string; id: number }) => <SelectItem value={data.id.toString()} key={data.id}>{data.name}</SelectItem>)
//                           }
//                         </SelectGroup>
//                       </SelectContent>
//                     </Select>
//                   </FormControl>

//                   <div className="min-h-5 pt-1">
//                     <FormMessage />
//                   </div>
//                 </FormItem>
//               )}
//             />

//             {
//               hasSerieOrderAndReadingTimes && (
//                 <div className="col-span-3 grid grid-cols-3 gap-x-10 gap-y-5">
//                   <FormField
//                     control={form.control}
//                     name="serie_order"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Series order *</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Enter series order" type="number" {...field} />
//                         </FormControl>

//                         <div className="min-h-5 pt-1"><FormMessage /></div>
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="reading_times"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Reading times *</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Enter reading times" type="number" {...field} />
//                         </FormControl>

//                         <div className="min-h-5 pt-1"><FormMessage /></div>
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               )
//             }

//           </div>

//           <OrganizationsFormField
//             form={form}
//             name="organization_id"
//             isRequired
//           />

//           <FormField
//             control={form.control}
//             name="target_user_group"
//             render={({ field }) => (
//               <FormItem className="w-full ">
//                 <FormLabel>Notification to</FormLabel>
//                 <FormControl>
//                   <MultiSelect onValuesChange={field.onChange} values={field.value as any}>
//                     <MultiSelectTrigger className="w-full h-10">
//                       <MultiSelectValue placeholder="Select tags" />
//                     </MultiSelectTrigger>

//                     <MultiSelectContent>
//                       <MultiSelectGroup>
//                         {
//                           isAppUserGroupsLoading && <div className="flex items-center justify-center pb-10"><Loader className="animate-spin" /></div>
//                         }

//                         {
//                           appUserGroups && appUserGroups.length > 0 && appUserGroups.map((option: any) => <MultiSelectItem value={option.id} key={option.id}>{option.title}</MultiSelectItem>)
//                         }
//                       </MultiSelectGroup>
//                     </MultiSelectContent>
//                   </MultiSelect>
//                 </FormControl>
//                 {" "}
//                 <div className="mt-1 min-h-5">
//                   <FormMessage />
//                 </div>

//               </FormItem>
//             )}
//           />

//           <div />

//           <FormField
//             control={form.control}
//             name="form_id"
//             render={({ field }) => (
//               <FormItem className="w-full">
//                 <FormLabel>Form</FormLabel>
//                 <FormControl>
//                   <Select value={field.value} onValueChange={field.onChange}>
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select form" />
//                     </SelectTrigger>

//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>Forms</SelectLabel>
//                         <ScrollArea className="">

//                           {
//                             isFormLoading && <div className="flex items-center justify-center pb-10"><Loader className="animate-spin" /></div>
//                           }
//                           <SelectItem value={GENERAL.FILTER_OFF}>-</SelectItem>
//                           {
//                             forms && forms.length > 0 && forms.map((data: any) => (<SelectItem key={data.id} value={data.id.toString()}>{data.form_title}</SelectItem>))
//                           }
//                         </ScrollArea>
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </FormControl>

//                 <div className="min-h-5 pt-1"><FormMessage /></div>

//               </FormItem>
//             )}
//           />

//           <FormField
//             control={form.control}
//             name="app_user_id"
//             render={({ field }) => (
//               <FormItem className="w-full">
//                 <FormLabel>Content creator</FormLabel>
//                 <FormControl>
//                   <Select value={field.value} onValueChange={field.onChange}>
//                     <SelectTrigger className="w-full">
//                       <SelectValue placeholder="Select form" />
//                     </SelectTrigger>

//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>Content creators</SelectLabel>
//                         <ScrollArea className="">

//                           {
//                             isSystemUsersForDropdownLoading && <div className="flex items-center justify-center pb-10"><Loader className="animate-spin" /></div>
//                           }
//                           <SelectItem value={GENERAL.FILTER_OFF}>-</SelectItem>
//                           {
//                             systemUsersForDropdown && systemUsersForDropdown.length > 0 && systemUsersForDropdown.map((data: any, idx: number) => (<SelectItem key={idx} value={data.id.toString()}>{data.name}</SelectItem>))
//                           }
//                         </ScrollArea>
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </FormControl>

//                 <div className="min-h-5 pt-1"><FormMessage /></div>

//               </FormItem>
//             )}
//           />

//           <div />

//           <FormField
//             name="allow_comment"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-green-600 has-aria-checked:bg-green-50 dark:has-aria-checked:border-green-900 dark:has-aria-checked:bg-green-950">
//                     <Checkbox
//                       id="toggle-1"
//                       defaultChecked
//                       value={field.value}
//                       onCheckedChange={field.onChange}
//                       className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-green-700"
//                     />
//                     <div className="grid gap-1.5 font-normal">
//                       <p className="text-sm leading-none font-medium">
//                         Allow comment
//                       </p>
//                       <p className="text-muted-foreground text-sm">
//                         You can enable or disable comment at any time.
//                       </p>
//                     </div>
//                   </Label>
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="show_alert"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>

//                   <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-green-600 has-aria-checked:bg-green-50 dark:has-aria-checked:border-green-900 dark:has-aria-checked:bg-green-950">
//                     <Checkbox
//                       id="toggle-2"

//                       value={field.value}
//                       onCheckedChange={field.onChange}
//                       className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-green-700"
//                     />
//                     <div className="grid gap-1.5 font-normal">
//                       <p className="text-sm leading-none font-medium">
//                         Alert Post
//                       </p>
//                       <p className="text-muted-foreground text-sm">
//                         You can enable or disable alert post at any time.
//                       </p>
//                     </div>
//                   </Label>
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//           <FormField
//             name="see_first"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-green-600 has-aria-checked:bg-green-50 dark:has-aria-checked:border-green-900 dark:has-aria-checked:bg-green-950">
//                     <Checkbox
//                       id="toggle-3"

//                       value={field.value}
//                       onCheckedChange={field.onChange}
//                       className="data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600 data-[state=checked]:text-white dark:data-[state=checked]:border-green-700 dark:data-[state=checked]:bg-green-700"
//                     />
//                     <div className="grid gap-1.5 font-normal">
//                       <p className="text-sm leading-none font-medium">
//                         Pin Post
//                       </p>
//                       <p className="text-muted-foreground text-sm">
//                         You can enable or disable pin post at any time.
//                       </p>
//                     </div>
//                   </Label>
//                 </FormControl>
//               </FormItem>
//             )}
//           />

//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// export default ContentDetails;
