import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkItem } from "@/data/links";

type Props = {
  link: LinkItem;
};

export function LinkCard({ link }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition hover:scale-[1.04]"
    >
      <Card>
        <CardHeader>
          <CardTitle>{link.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{link.description}</p>
        </CardContent>
      </Card>
    </a>
  );
}
