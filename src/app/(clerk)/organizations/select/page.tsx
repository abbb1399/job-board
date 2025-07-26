import { OrganizationList } from "@clerk/nextjs";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ redirect?: string }>;
};

export default function SelectOrganizationPage({ searchParams }: Props) {
  return (
    <Suspense>
      <SuspensedPage searchParams={searchParams} />
    </Suspense>
  );
}

async function SuspensedPage({ searchParams }: Props) {
  const { redirect } = await searchParams;
  const redirectUrl = redirect ?? "/employer";

  return (
    <OrganizationList
      hidePersonal
      hideSlug
      skipInvitationScreen
      afterCreateOrganizationUrl={redirectUrl}
      afterSelectOrganizationUrl={redirectUrl}
    />
  );
}
