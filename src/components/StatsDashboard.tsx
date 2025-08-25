import React from 'react';
import { TrendingUp, TrendingDown, Activity, Shield, Camera, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StatsDashboard = () => {
  const stats = [
    {
      title: 'Active Cameras',
      value: '12',
      change: '+2',
      changeType: 'positive',
      icon: Camera,
      description: 'Online systems'
    },
    {
      title: 'Detections Today',
      value: '24',
      change: '-8%',
      changeType: 'negative',
      icon: Activity,
      description: 'vs yesterday'
    },
    {
      title: 'Active Alerts',
      value: '3',
      change: 'Critical',
      changeType: 'warning',
      icon: AlertTriangle,
      description: 'Require attention'
    },
    {
      title: 'System Uptime',
      value: '99.9%',
      change: 'Excellent',
      changeType: 'positive',
      icon: Shield,
      description: 'Last 30 days'
    }
  ];

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'positive': return TrendingUp;
      case 'negative': return TrendingDown;
      default: return Activity;
    }
  };

  const getChangeColor = (type: string) => {
    switch (type) {
      case 'positive': return 'text-status-online';
      case 'negative': return 'text-alert-critical';
      case 'warning': return 'text-alert-warning';
      default: return 'text-muted-foreground';
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'positive': return 'bg-status-online text-white';
      case 'negative': return 'bg-alert-critical text-white';
      case 'warning': return 'bg-alert-warning text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  // Mock chart data for visualization
  const chartData = [
    { time: '00:00', detections: 2 },
    { time: '04:00', detections: 1 },
    { time: '08:00', detections: 4 },
    { time: '12:00', detections: 6 },
    { time: '16:00', detections: 8 },
    { time: '20:00', detections: 5 },
    { time: '24:00', detections: 3 }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-dashboard-card-border hover:bg-dashboard-hover transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={getBadgeVariant(stat.changeType)}>
                  {stat.change}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Detection Timeline Chart */}
        <Card className="border-dashboard-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5" />
              <span>Detections Over Time</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 relative">
              {/* Simple SVG Chart */}
              <svg width="100%" height="100%" className="text-chart-grid">
                {/* Grid Lines */}
                <defs>
                  <pattern id="chartGrid" width="40" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#chartGrid)" />
                
                {/* Chart Line */}
                <polyline
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  points={chartData.map((point, index) => 
                    `${(index / (chartData.length - 1)) * 100}%,${100 - (point.detections / 10) * 80}%`
                  ).join(' ')}
                />
                
                {/* Data Points */}
                {chartData.map((point, index) => (
                  <circle
                    key={index}
                    cx={`${(index / (chartData.length - 1)) * 100}%`}
                    cy={`${100 - (point.detections / 10) * 80}%`}
                    r="4"
                    fill="hsl(var(--primary))"
                    className="hover:r-6 transition-all cursor-pointer"
                  />
                ))}
              </svg>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground">
                {chartData.map((point, index) => (
                  <span key={index}>{point.time}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Area Heatmap */}
        <Card className="border-dashboard-card-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Detection Hotspots</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { area: 'Main Gate - Block A', detections: 15, percentage: 85 },
                { area: 'Parking Zone B', detections: 8, percentage: 45 },
                { area: 'Garden Path C', detections: 6, percentage: 35 },
                { area: 'Side Entrance D', detections: 3, percentage: 20 },
                { area: 'Back Alley E', detections: 2, percentage: 15 }
              ].map((area, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{area.area}</span>
                    <span className="text-muted-foreground">{area.detections} detections</span>
                  </div>
                  <div className="w-full bg-security-gray rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${area.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card className="border-dashboard-card-border">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>System Status Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="font-medium">AI Detection Engine</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-status-online rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Running optimally</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">IoT Sensors Network</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-status-online rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">12/12 devices online</span>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Alert System</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-alert-warning rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">3 active alerts pending</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsDashboard;