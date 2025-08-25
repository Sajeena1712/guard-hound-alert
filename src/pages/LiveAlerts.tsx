import React from 'react';
import Navigation from '@/components/Navigation';
import AlertPanel from '@/components/AlertPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  MessageSquare,
  Phone,
  Mail,
  Zap,
  Camera,
  MapPin,
  Clock
} from 'lucide-react';

const LiveAlerts = () => {
  const [alertsActive, setAlertsActive] = React.useState(true);
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  const emergencyContacts = [
    { name: 'Security Team', phone: '+91-9876543210', role: 'Primary Response' },
    { name: 'Campus Admin', phone: '+91-9876543211', role: 'Administration' },
    { name: 'Local Authority', phone: '+91-9876543212', role: 'External Support' }
  ];

  const recentNotifications = [
    {
      id: '1',
      type: 'whatsapp',
      message: 'Alert sent to Security Team',
      timestamp: '2 min ago',
      status: 'delivered'
    },
    {
      id: '2',
      type: 'sms',
      message: 'SMS notification to +91-9876***210',
      timestamp: '3 min ago',
      status: 'delivered'
    },
    {
      id: '3',
      type: 'email',
      message: 'Email alert to admin@campus.edu',
      timestamp: '3 min ago',
      status: 'sent'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header with Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-alert-critical animate-pulse-alert" />
              <span>Live Alert System</span>
            </h1>
            <p className="text-muted-foreground">Real-time monitoring and emergency response coordination</p>
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant={alertsActive ? "destructive" : "outline"}
              onClick={() => setAlertsActive(!alertsActive)}
            >
              {alertsActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
              {alertsActive ? 'Pause Alerts' : 'Resume Alerts'}
            </Button>
            <Button
              variant="outline"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              {soundEnabled ? <Volume2 className="h-4 w-4 mr-2" /> : <VolumeX className="h-4 w-4 mr-2" />}
              Sound {soundEnabled ? 'On' : 'Off'}
            </Button>
          </div>
        </div>

        {/* System Status */}
        <Card className="border-dashboard-card-border">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${alertsActive ? 'bg-status-online animate-pulse' : 'bg-status-offline'}`}></div>
                  <span className="font-medium">Alert System: {alertsActive ? 'Active' : 'Paused'}</span>
                </div>
                <Badge variant="outline">
                  12 Cameras Online
                </Badge>
                <Badge variant="outline" className="text-alert-critical border-alert-critical">
                  3 Active Alerts
                </Badge>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Last update: {new Date().toLocaleTimeString()}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Live Alerts */}
          <div className="lg:col-span-2 space-y-6">
            <AlertPanel />

            {/* IoT Control Panel */}
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>IoT Response Controls</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Volume2 className="h-6 w-6" />
                    <span>Ultrasonic Repeller</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Zap className="h-6 w-6" />
                    <span>Warning Lights</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <AlertTriangle className="h-6 w-6" />
                    <span>Emergency Siren</span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Manual override controls for IoT deterrent devices
                </p>
              </CardContent>
            </Card>

            {/* Live Camera Feed */}
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5" />
                  <span>Live Camera Feeds</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: 'CAM-001', name: 'Main Gate', status: 'alert', location: 'Block A' },
                    { id: 'CAM-005', name: 'Parking Zone', status: 'warning', location: 'Zone B' },
                    { id: 'CAM-012', name: 'Garden Path', status: 'normal', location: 'Section C' },
                    { id: 'CAM-008', name: 'Side Entrance', status: 'offline', location: 'Zone D' }
                  ].map((camera) => (
                    <div key={camera.id} className="relative">
                      <div className="aspect-video bg-security-gray border border-dashboard-card-border rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="font-medium">{camera.name}</p>
                          <p className="text-sm text-muted-foreground">{camera.id}</p>
                        </div>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className={
                          camera.status === 'alert' ? 'bg-alert-critical text-white animate-pulse-alert' :
                          camera.status === 'warning' ? 'bg-alert-warning text-white' :
                          camera.status === 'normal' ? 'bg-status-online text-white' :
                          'bg-status-offline text-white'
                        }>
                          {camera.status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge variant="outline" className="bg-background/80">
                          {camera.location}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Notifications & Contacts */}
          <div className="space-y-6">
            {/* Emergency Contacts */}
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Emergency Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-dashboard-card-border rounded-lg">
                      <div>
                        <p className="font-medium">{contact.name}</p>
                        <p className="text-sm text-muted-foreground">{contact.role}</p>
                      </div>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notification History */}
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Recent Notifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-start space-x-3 p-3 border border-dashboard-card-border rounded-lg">
                      <div className="flex-shrink-0 mt-1">
                        {notification.type === 'whatsapp' && <MessageSquare className="h-4 w-4 text-green-600" />}
                        {notification.type === 'sms' && <Phone className="h-4 w-4 text-blue-600" />}
                        {notification.type === 'email' && <Mail className="h-4 w-4 text-gray-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{notification.message}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">{notification.timestamp}</span>
                          <Badge variant="outline" className="text-xs">
                            {notification.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle>Quick Response Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="destructive">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Send Emergency Alert
                </Button>
                <Button className="w-full" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Broadcast Message
                </Button>
                <Button className="w-full" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Security Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiveAlerts;