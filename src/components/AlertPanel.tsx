import React from 'react';
import { AlertTriangle, MapPin, Clock, Camera, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Alert {
  id: string;
  location: string;
  dogCount: number;
  timestamp: string;
  cameraId: string;
  severity: 'critical' | 'warning' | 'info';
  status: 'active' | 'resolved';
}

const AlertPanel = () => {
  const alerts: Alert[] = [
    {
      id: '1',
      location: 'Main Gate - Block A',
      dogCount: 3,
      timestamp: '2 minutes ago',
      cameraId: 'CAM-001',
      severity: 'critical',
      status: 'active'
    },
    {
      id: '2',
      location: 'Parking Area - Zone B',
      dogCount: 1,
      timestamp: '8 minutes ago',
      cameraId: 'CAM-005',
      severity: 'warning',
      status: 'active'
    },
    {
      id: '3',
      location: 'Garden Path - Section C',
      dogCount: 2,
      timestamp: '15 minutes ago',
      cameraId: 'CAM-012',
      severity: 'warning',
      status: 'resolved'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-alert-critical text-white';
      case 'warning': return 'bg-alert-warning text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-alert-critical-bg text-alert-critical' : 'bg-muted text-muted-foreground';
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-alert-critical animate-pulse-alert" />
          <h2 className="text-lg font-semibold">Live Security Alerts</h2>
        </div>
        <Badge variant="outline" className="animate-pulse-alert">
          {alerts.filter(a => a.status === 'active').length} Active
        </Badge>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {alerts.map((alert) => (
          <Card 
            key={alert.id} 
            className={`
              p-4 border transition-all duration-200 animate-slide-in
              ${alert.status === 'active' && alert.severity === 'critical' 
                ? 'border-alert-critical bg-alert-critical-bg' 
                : 'border-dashboard-card-border hover:bg-dashboard-hover'
              }
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-2">
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(alert.status)}>
                    {alert.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{alert.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{alert.dogCount} dogs detected</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Camera className="h-4 w-4" />
                      <span>{alert.cameraId}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{alert.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {alert.status === 'active' && (
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                  <Button size="sm" variant="destructive">
                    Alert Security
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
      
      {alerts.length === 0 && (
        <Card className="p-8 text-center border-dashed">
          <AlertTriangle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-muted-foreground">No active alerts</p>
          <p className="text-sm text-muted-foreground mt-1">System monitoring normally</p>
        </Card>
      )}
    </div>
  );
};

export default AlertPanel;