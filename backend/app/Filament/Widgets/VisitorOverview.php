<?php

namespace App\Filament\Widgets;

use App\Models\Visitor;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Carbon\Carbon;

class VisitorOverview extends BaseWidget
{
    protected function getStats(): array
    {
        $today = Carbon::today();
        
        return [
            Stat::make('Total Visits', Visitor::count())
                ->description('All time total visits')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('success'),
                
            Stat::make('Unique Visitors', Visitor::distinct('ip_address')->count('ip_address'))
                ->description('Unique IP addresses')
                ->descriptionIcon('heroicon-m-user')
                ->color('info'),
                
            Stat::make("Today's Visits", Visitor::whereDate('created_at', $today)->count())
                ->description('Visits recorded today')
                ->descriptionIcon('heroicon-m-clock')
                ->color('warning'),
        ];
    }
}
