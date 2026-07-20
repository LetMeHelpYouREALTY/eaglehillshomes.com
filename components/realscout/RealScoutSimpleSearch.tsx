import { getRealscoutAgentId } from "@/lib/site";

type RealScoutSimpleSearchProps = {
  className?: string;
};

export function RealScoutSimpleSearch({
  className = "",
}: RealScoutSimpleSearchProps) {
  const agentId = getRealscoutAgentId();

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<realscout-simple-search agent-encoded-id="${agentId}"></realscout-simple-search>`,
      }}
    />
  );
}
