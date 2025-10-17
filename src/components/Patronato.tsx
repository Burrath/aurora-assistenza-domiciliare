import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, Clock, Users, Shield, Award } from "lucide-react";

export function Patronato() {
  return (
    <section id="patronato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">CAF/Patronato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gestione documentale e disbrigo pratiche per i diritti del malato e dell'anziano
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Consulenza Tempestiva sui Diritti</h3>
              <p className="text-muted-foreground leading-relaxed">
                Forniamo a domicilio una consulenza tempestiva sui diritti del malato e ci occupiamo 
                sia del disbrigo pratiche per l'ottenimento dei presidi a carico dell'ASP di Catania, 
                sia per quelle relative a invalidità e accompagnamento.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-primary" />
                <span>Disbrigo pratiche ASP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Scale className="h-5 w-5 text-primary" />
                <span>Invalidità e accompagnamento</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Consulenza tempestiva</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  Servizi CAF
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Assistenza completa per la gestione di tutte le pratiche burocratiche 
                  relative alla situazione sanitaria e sociale del paziente.
                </CardDescription>
                <Badge variant="secondary">
                  Servizio a Domicilio
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-xl">Disbrigo Pratiche</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Gestione completa delle pratiche per l'ottenimento di presidi sanitari, 
                invalidità e accompagnamento presso l'ASP.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Scale className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="text-xl">Consulenza Legale</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Supporto legale per la comprensione dei diritti del malato e dell'anziano 
                in ambito sanitario e sociale.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="text-xl">Tutela Diritti</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Protezione e tutela dei diritti dell'anziano e del malato attraverso 
                una consulenza specializzata e competente.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <Clock className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <CardTitle className="text-xl">Servizio Rapido</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Gestione tempestiva delle pratiche con consulenza a domicilio 
                per ridurre tempi e stress burocratico.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                <Award className="h-8 w-8 text-red-600 dark:text-red-400" />
              </div>
              <CardTitle className="text-xl">Competenza Certificata</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Personale qualificato e certificato per offrire consulenze 
                accurate e aggiornate sulla normativa vigente.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle className="text-xl">Supporto Familiare</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Assistenza completa per tutta la famiglia nella gestione 
                delle pratiche e dei diritti dell'anziano.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg p-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-medium">Consulenza a domicilio</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Servizio tempestivo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="font-medium">Competenza certificata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
