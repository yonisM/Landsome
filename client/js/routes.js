angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
   .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller:'step1SelectAThemeCtrl'
  })
  
    .state('checkout', {
    url: '/checkout',
    templateUrl: 'templates/checkout.html'
  })
  
      .state('dashboard.step1SelectATheme', {
    url: '/theme',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step1SelectATheme.html',
        controller: 'step1SelectAThemeCtrl',
        authenticate:true
      }
    }
  })

  .state('dashboard.step2AddPersonalDetails', {
    url: '/personaldetails',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step2AddPersonalDetails.html',
        controller: 'step2AddPersonalDetailsCtrl'
      }
    }
  })
  
   .state('dashboard.dashboardPage', {
    url: '/dashboardPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dashboardPage.html',
        controller: 'userCtrl'
      }
    }
  })

  .state('dashboard.step3Summary', {
    url: '/summary',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step3Summary.html',
        controller: 'step3SummaryCtrl'
      }
    }
  })

  .state('dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard.html',
    controller:'userCtrl',
    abstract:true
  })

  .state('dashboard.step4AdditionalInformationAboutYourself', {
    url: '/additonalinfo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step4AdditionalInformationAboutYourself.html',
        controller: 'step4AdditionalInformationAboutYourselfCtrl',
        authenticate: true
      }
    }
  })

  .state('dashboard.step5AddSampleWorkS', {
    url: '/sampleform',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step5AddSampleWorkS.html',
        controller: 'step5AddSampleWorkSCtrl'
      }
    }
  })

  .state('dashboard.step6AddAdditionalExperience', {
    url: '/additionalexperience',
    views: {
      'side-menu21': {
        templateUrl: 'templates/step6AddAdditionalExperience.html',
        controller: 'step6AddAdditionalExperienceCtrl'
      }
    }
  })
  
  .state('login', {
    url: '/login',
      templateUrl: 'templates/login.html', 
  })
  
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'userCtrl'
  })

  
  /// from here
  
  .state('usernotpaid', {
    url: '/usernotpaid',
    templateUrl: 'templates/userNotPaid.html',
    controller: 'userCtrl'
  })
  

  
  .state('userPaidNotPickedUp', {
    url: '/userPaidNotPickedUp',
    templateUrl: 'templates/userPaidNotPickedUp.html',
    controller: 'userCtrl'
  })
  
  
  
  .state('userPaidPickedUp', {
    url: '/userPaidPickedUp',
    templateUrl: 'templates/userPaidPickedUp.html',
    controller: 'userCtrl'
  })
  
  
  .state('userPaidComplete', {
    url: '/userPaidComplete',
    templateUrl: 'templates/userPaidComplete.html',
    controller: 'userCtrl'
  })
  
  
  .state('userLiveList', {
    url: '/userLiveList',
    templateUrl: 'templates/userLiveList.html',
    controller: 'userCtrl'
  })
  
  
  .state('userProfilePage', {
    url: '/userProfilePage',
    templateUrl: 'templates/userProfilePage.html',
    controller: 'userCtrl'
  })
  
  
$urlRouterProvider.otherwise('/login')

  

});
