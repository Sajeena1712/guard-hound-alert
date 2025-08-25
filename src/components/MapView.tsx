import React from 'react';
import { MapPin, Camera, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MapView = () => {
  const detectionHotspots = [
    { id: '1', name: 'Main Gate', x: 20, y: 30, severity: 'critical', count: 3, timestamp: '2 min ago' },
    { id: '2', name: 'Parking Zone B', x: 60, y: 45, severity: 'warning', count: 1, timestamp: '8 min ago' },
    { id: '3', name: 'Garden Path', x: 45, y: 70, severity: 'resolved', count: 0, timestamp: '15 min ago' },
    { id: '4', name: 'Side Entrance', x: 80, y: 25, severity: 'normal', count: 0, timestamp: '1 hr ago' }
  ];

  const cameras = [
    { id: 'CAM-001', name: 'Main Gate Camera', x: 22, y: 28, status: 'online', alerts: 3 },
    { id: 'CAM-005', name: 'Parking Camera', x: 58, y: 47, status: 'online', alerts: 1 },
    { id: 'CAM-012', name: 'Garden Camera', x: 47, y: 68, status: 'online', alerts: 0 },
    { id: 'CAM-008', name: 'Side Camera', x: 82, y: 27, status: 'offline', alerts: 0 }
  ];

  const getHotspotColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-alert-critical animate-pulse-alert';
      case 'warning': return 'bg-alert-warning';
      case 'resolved': return 'bg-muted';
      default: return 'bg-status-online';
    }
  };

  const getHotspotIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return AlertCircle;
      case 'warning': return AlertCircle;
      case 'resolved': return CheckCircle;
      default: return CheckCircle;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Detection Map - Live View</h2>
        <div className="flex space-x-2">
          <Badge variant="outline">
            <div className="w-2 h-2 bg-status-online rounded-full mr-2"></div>
            System Online
          </Badge>
        </div>
      </div>

      <Card className="p-6">
        <div className="relative bg-map-background rounded-lg overflow-hidden" style={{ height: '500px' }}>
          {/* Map Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="text-chart-grid">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Detection Hotspots */}
          {detectionHotspots.map((hotspot) => {
            const Icon = getHotspotIcon(hotspot.severity);
            return (
              <div
                key={hotspot.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
              >
                <div className={`
                  w-4 h-4 rounded-full ${getHotspotColor(hotspot.severity)} 
                  border-2 border-white shadow-lg
                `}>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4" />
                      <span>{hotspot.name}</span>
                    </div>
                    <div className="text-xs opacity-90 mt-1">
                      {hotspot.count > 0 ? `${hotspot.count} dogs detected` : 'All clear'} • {hotspot.timestamp}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Camera Positions */}
          {cameras.map((camera) => (
            <div
              key={camera.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${camera.x}%`, top: `${camera.y}%` }}
            >
              <div className={`
                p-1 rounded-lg shadow-lg border-2 border-white
                ${camera.status === 'online' ? 'bg-dashboard-card text-foreground' : 'bg-muted text-muted-foreground'}
              `}>
                <Camera className="h-3 w-3" />
              </div>
              
              {camera.alerts > 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-alert-critical rounded-full text-xs text-white flex items-center justify-center font-bold">
                  {camera.alerts}
                </div>
              )}
              
              {/* Camera Status Indicator */}
              <div className={`
                absolute -bottom-1 -right-1 w-2 h-2 rounded-full border border-white
                ${camera.status === 'online' ? 'bg-status-online animate-pulse' : 'bg-status-offline'}
              `}></div>

              {/* Camera Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Camera className="h-4 w-4" />
                    <span>{camera.name}</span>
                  </div>
                  <div className="text-xs opacity-90 mt-1">
                    Status: {camera.status} • ID: {camera.id}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Area Labels */}
          <div className="absolute top-4 left-4 text-sm font-medium text-muted-foreground">Zone A - Main Campus</div>
          <div className="absolute top-4 right-4 text-sm font-medium text-muted-foreground">Zone B - Parking</div>
          <div className="absolute bottom-4 left-4 text-sm font-medium text-muted-foreground">Zone C - Garden Area</div>
          <div className="absolute bottom-4 right-4 text-sm font-medium text-muted-foreground">Zone D - Side Entrance</div>
        </div>

        {/* Map Legend */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-alert-critical rounded-full"></div>
            <span>Critical Alert</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-alert-warning rounded-full"></div>
            <span>Warning</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-status-online rounded-full"></div>
            <span>All Clear</span>
          </div>
          <div className="flex items-center space-x-2">
            <Camera className="h-3 w-3" />
            <span>AI Camera</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MapView;