import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, Heart, BookOpen, Camera, Utensils, Car, Church, Users } from "lucide-react";

const activities = [
  { icon: BookOpen, title: "Discussioni e letture", description: "Eventi odierni, libri e riviste adeguate" },
  { icon: Camera, title: "Album fotografici", description: "Visione e condivisione ricordi di famiglia" },
  { icon: Utensils, title: "Ricette tradizionali", description: "Ricordare e riprodurre ricette del passato" },
  { icon: Car, title: "Passeggiate", description: "Gite in auto con sedia portantina" },
  { icon: Church, title: "Funzioni religiose", description: "Accompagnamento a messe e cerimonie" },
  { icon: Users, title: "Visite amici", description: "Organizzazione taxi per visite di parenti e amici" }
];

export function ElderlyCare() {
  return (
    <section id="assistenza-anziani" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Assistenza Domiciliare Anziani</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La nostra organizzazione vuole dare rapide soluzioni alle esigenze e alla qualità di vita 
            del paziente a domicilio e dei suoi familiari
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">La Nostra Filosofia</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400">Non crediamo in un'assistenza svolta da un'unica badante convivente</h4>
                    <p className="text-sm text-muted-foreground">Tale soluzione non si avvicina minimamente agli standard da noi previsti</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Crediamo in un'assistenza domiciliare basata su turnazioni</h4>
                    <p className="text-sm text-muted-foreground">L'assistente può recuperare psicologicamente e fisicamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-primary" />
                  Assistenza Specializzata
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Solamente un'assistenza così concepita può contare su assistenti specializzate 
                  e attente alla sensibilità e alla dignità del paziente.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Attività Stimolanti ed Emozionali</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Con il responsabile a te dedicato potrete decidere e organizzare una serie di attività 
              che coinvolgano emotivamente e intellettualmente il paziente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <activity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {activity.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">Un Responsabile Dedicato</h4>
            <p className="text-muted-foreground mb-4">
              Un unico responsabile a voi dedicato sarà l'interlocutore che organizzerà le soluzioni specifiche 
              per rendere l'abitazione del paziente il luogo ideale per essere assistito
            </p>
            <Button size="lg">
              Richiedi Assistenza
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
