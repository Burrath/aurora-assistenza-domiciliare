import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ambulance as AmbulanceIcon, Shield, Clock, Users, Thermometer, Stethoscope, Zap } from "lucide-react";

export function Ambulance() {
  return (
    <section id="ambulanza" className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Trasporto in Ambulanza</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le nostre ambulanze sono dotate di attrezzature d'avanguardia e condotte da volontari qualificati
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Caratteristiche delle Nostre Ambulanze</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Attrezzature d'avanguardia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  <span>Kit di pronto soccorso completo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Sedie portantine pieghevoli</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Thermometer className="h-5 w-5 text-primary" />
                  <span>Automezzi climatizzati</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Volontari qualificati</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AmbulanceIcon className="mr-2 h-5 w-5 text-primary" />
                  Servizio di Trasporto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Offriamo un servizio di trasporto sanitario professionale e sicuro 
                  per tutte le esigenze di mobilità medica.
                </CardDescription>
                <Badge variant="secondary" className="mb-4">
                  Servizio 24/7
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl">Disponibilità 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Servizio di trasporto disponibile 24 ore su 24, 7 giorni su 7 per emergenze e trasferimenti programmati.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl">Sicurezza Garantita</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Equipaggiamenti medici certificati e personale qualificato per garantire il massimo livello di sicurezza.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl">Personale Qualificato</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Volontari e operatori sanitari formati e certificati per offrire assistenza professionale durante il trasporto.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group">
            Richiedi Trasporto
            <AmbulanceIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
