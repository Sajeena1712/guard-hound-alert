import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Calendar,
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Clock
} from 'lucide-react';

const Reports = () => {
  const reports = [
    {
      title: 'Daily Detection Summary',
      description: 'Comprehensive daily analysis of all detection events',
      type: 'daily',
      generated: '2 hours ago',
      size: '2.4 MB'
    },
    {
      title: 'Weekly Security Report',
      description: 'Weekly trends and patterns in dog detection activities',
      type: 'weekly',
      generated: '1 day ago',
      size: '5.8 MB'
    },
    {
      title: 'Monthly Analytics',
      description: 'Complete monthly analysis with predictions and insights',
      type: 'monthly',
      generated: '3 days ago',
      size: '12.3 MB'
    },
    {
      title: 'System Performance Report',
      description: 'AI model accuracy and system uptime statistics',
      type: 'technical',
      generated: '5 hours ago',
      size: '1.8 MB'
    }
  ];

  const quickStats = [
    { label: 'Reports Generated', value: '147', icon: FileText },
    { label: 'Avg Response Time', value: '2.3 min', icon: Clock },
    { label: 'System Accuracy', value: '95.2%', icon: TrendingUp },
    { label: 'Data Processed', value: '8.7 TB', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <FileText className="h-6 w-6" />
              <span>Reports & Analytics</span>
            </h1>
            <p className="text-muted-foreground">Comprehensive analysis and reporting dashboard</p>
          </div>
          
          <div className="flex space-x-2">
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Report
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        {/* Quick Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickStats.map((stat, index) => (
            <Card key={index} className="border-dashboard-card-border">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Report Generation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle>Available Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-dashboard-card-border rounded-lg hover:bg-dashboard-hover transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-security-gray rounded-lg">
                          {report.type === 'daily' && <BarChart3 className="h-5 w-5" />}
                          {report.type === 'weekly' && <TrendingUp className="h-5 w-5" />}
                          {report.type === 'monthly' && <PieChart className="h-5 w-5" />}
                          {report.type === 'technical' && <Activity className="h-5 w-5" />}
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{report.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                          <div className="flex space-x-4 text-xs text-muted-foreground">
                            <span>Generated: {report.generated}</span>
                            <span>Size: {report.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle>Generate New Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Real-time Analytics
                </Button>
                <Button className="w-full" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Trend Analysis
                </Button>
                <Button className="w-full" variant="outline">
                  <PieChart className="h-4 w-4 mr-2" />
                  Detection Heatmap
                </Button>
                <Button className="w-full" variant="outline">
                  <Activity className="h-4 w-4 mr-2" />
                  System Performance
                </Button>
              </CardContent>
            </Card>

            <Card className="border-dashboard-card-border">
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Daily Summary</p>
                      <p className="text-sm text-muted-foreground">Every day at 6:00 AM</p>
                    </div>
                    <Badge variant="outline" className="text-status-online border-status-online">
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly Report</p>
                      <p className="text-sm text-muted-foreground">Every Monday at 9:00 AM</p>
                    </div>
                    <Badge variant="outline" className="text-status-online border-status-online">
                      Active
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;