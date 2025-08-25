import React from 'react';
import Navigation from '@/components/Navigation';
import MapView from '@/components/MapView';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Map, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Settings,
  Maximize,
  Download
} from 'lucide-react';

const MapViewPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header with Map Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <Map className="h-6 w-6" />
              <span>Interactive Detection Map</span>
            </h1>
            <p className="text-muted-foreground">Real-time visualization of detection zones and camera coverage</p>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Map
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Map Settings
            </Button>
          </div>
        </div>

        {/* Map Controls Bar */}
        <Card className="border-dashboard-card-border">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">
                  <div className="w-2 h-2 bg-status-online rounded-full mr-2"></div>
                  Live View
                </Badge>
                <Badge variant="outline">12 Cameras</Badge>
                <Badge variant="outline" className="text-alert-critical border-alert-critical">
                  3 Active Alerts
                </Badge>
              </div>
              
              <div className="flex space-x-1">
                <Button variant="outline" size="sm">
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Layers className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Maximize className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Map Component */}
        <MapView />

        {/* Zone Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">Zone A</div>
              <div className="text-sm text-muted-foreground">Main Campus</div>
              <div className="text-lg font-semibold text-alert-critical mt-2">3 Active</div>
            </CardContent>
          </Card>
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">Zone B</div>
              <div className="text-sm text-muted-foreground">Parking Area</div>
              <div className="text-lg font-semibold text-status-online mt-2">Clear</div>
            </CardContent>
          </Card>
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">Zone C</div>
              <div className="text-sm text-muted-foreground">Garden Path</div>
              <div className="text-lg font-semibold text-status-online mt-2">Clear</div>
            </CardContent>
          </Card>
          <Card className="border-dashboard-card-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-foreground">Zone D</div>
              <div className="text-sm text-muted-foreground">Side Entrance</div>
              <div className="text-lg font-semibold text-status-offline mt-2">Offline</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default MapViewPage;