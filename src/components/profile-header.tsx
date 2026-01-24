import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-2 mb-12">
      {/* Avatar */}
      <Avatar className="h-20 w-20 ring-2 ring-primary/30 transition hover:scale-110">
        <AvatarImage src="/avatar.png" alt="Leonardo Victor" />
        <AvatarFallback className="font-semibold text-3xl">LV</AvatarFallback>
      </Avatar>

      {/* Nome */}
      <h2 className="text-xl font-semibold">Leonardo Victor</h2>

      {/* Bio */}
      <p className="text-sm text-muted-foreground max-w-xs">
        Um apaixonado por tecnologia, compartilhando meus links e projetos com o
        mundo.
      </p>

      {/* Botão Currículo (alinhado à esquerda) */}
      <div className="w-full flex justify-end pt-6">
        <Button asChild variant="outline">
          <a href="/curriculo.pdf" download className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Baixar currículo
          </a>
        </Button>
      </div>
    </div>
  );
}
