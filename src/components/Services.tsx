import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Ambulance, FileText, ShoppingCart, Heart, Home, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Assistenza Domiciliare",
    description: "Assistenti specializzate per l'assistenza domiciliare degli anziani con turnazioni e supporto psicologico.",
    badge: "24/7"
  },
  {
    icon: Stethoscope,
    title: "Infermieri Professionali",
    description: "Infermieri selezionati per cure post-ospedaliere con reperibilità 7 giorni su 7, 24 ore al giorno.",
    badge: "Specializzato"
  },
  {
    icon: Ambulance,
    title: "Trasporti Ambulanza",
    description: "Ambulanze dotate di attrezzature d'avanguardia, climatizzate e condotte da volontari qualificati.",
    badge: "Emergenza"
  },
  {
    icon: FileText,
    title: "Disbrigo Pratiche",
    description: "Consulenza tempestiva sui diritti del malato e gestione pratiche per ASP, invalidità e accompagnamento.",
    badge: "CAF"
  },
  {
    icon: ShoppingCart,
    title: "Noleggio Presidi",
    description: "Noleggio e vendita di presidi ortopedici e sanitari per pazienti disabili con consegna entro 24 ore.",
    badge: "Rapido"
  },
  {
    icon: Home,
    title: "Casa Sicura",
    description: "Valutazione domotica per sorveglianza, comfort, automazioni e adeguamento bagno per superare barriere.",
    badge: "Innovativo"
  }
];

export function Services() {
  return (
    <section id="servizi" className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Servizi Integrati Aurora</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un ecosistema completo di servizi per l'assistenza domiciliare e la qualità di vita dell'anziano
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-purple-600/20 transition-all">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Scopri di più
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-2xl">
                  <Heart className="mr-2 h-6 w-6 text-primary" />
                  Un Responsabile Dedicato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-6">
                  Un unico responsabile a voi dedicato sarà l'interlocutore che organizzerà le soluzioni specifiche 
                  per rendere l'abitazione del paziente il luogo ideale per essere assistito con i servizi integrati Aurora:
                </CardDescription>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <span>Infermieri</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Ambulance className="h-4 w-4 text-primary" />
                    <span>Ambulanza</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Disbrigo pratiche</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                    <span>Noleggio presidi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Assistenza domiciliare</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Home className="h-4 w-4 text-primary" />
                    <span>Casa sicura</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group">
            Richiedi Consulenza
            <Heart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
