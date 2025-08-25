import React from 'react';
import Navigation from '@/components/Navigation';
import AlertPanel from '@/components/AlertPanel';
import MapView from '@/components/MapView';
import StatsDashboard from '@/components/StatsDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Activity, AlertTriangle, Zap } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-muted p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-primary-foreground" />
            <h1 className="text-3xl font-bold text-primary-foreground">
              AI-Powered Smart Dog Detection System
            </h1>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            Real-time monitoring and intelligent alerts for enhanced safety and security.
            Advanced AI detection with IoT integration for comprehensive area surveillance.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="lg">
              <Activity className="h-4 w-4 mr-2" />
              View Live Feed
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Zap className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>
        </section>

        {/* System Status Bar */}
        <div className="flex flex-wrap gap-4 p-4 bg-dashboard-card border border-dashboard-card-border rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-status-online rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">System Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-status-online border-status-online">
              12 Cameras Active
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-alert-critical border-alert-critical animate-pulse-alert">
              3 Active Alerts
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              Last Detection: 2 min ago
            </Badge>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats and Alerts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Statistics Dashboard */}
            <StatsDashboard />
            
            {/* Recent Detection Example */}
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-alert-warning" />
                  <span>Latest Detection Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/2">
                    <div className="w-full h-48 bg-security-gray border border-dashboard-card-border rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <AlertTriangle className="h-12 w-12 text-alert-critical mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Live Detection Feed</p>
                        <p className="text-xs text-muted-foreground">Camera: CAM-001</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-alert-critical text-white">CRITICAL</Badge>
                        <span className="text-sm text-muted-foreground">Main Gate - Block A</span>
                      </div>
                      <h4 className="font-medium">3 Dogs Detected</h4>
                      <p className="text-sm text-muted-foreground">
                        AI confidence: 98.5% • Detection time: 2:34 PM
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Camera ID:</span>
                        <p className="text-muted-foreground">CAM-001</p>
                      </div>
                      <div>
                        <span className="font-medium">Alert Sent:</span>
                        <p className="text-muted-foreground">Security team</p>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      View Full Analysis
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Live Alerts */}
          <div className="space-y-8">
            <AlertPanel />
          </div>
        </div>

        {/* Map Section */}
        <MapView />
      </main>
    </div>
  );
};

export default Dashboard;