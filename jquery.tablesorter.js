



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-73b6e7254b4ff47628bc2700deeaccfe68ae11f3b55062485e2e586d8a58246a.css" integrity="sha256-c7bnJUtP9HYovCcA3urM/miuEfO1UGJIXi5YbYpYJGo=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-ff4e1442a7f097b1d8db6f9bc10af12ca6545a84d7385542b8b6f843a9d6558e.css" integrity="sha256-/04UQqfwl7HY22+bwQrxLKZUWoTXOFVCuLb4Q6nWVY4=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-5cb6f1c6f9211bfeed3bfc7596d8a1b3c5f4bb841d5318645a0aafff48b5b33d.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-4d2a356f4430f896e2a75f556c876f30ebcfcbd1e92750e483c3155bd6747a88.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>tablesorter/jquery.tablesorter.js at master · Mottie/tablesorter</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars1.githubusercontent.com/u/136959?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Mottie/tablesorter" name="twitter:title" /><meta content="Github fork of Christian Bach&#39;s tablesorter plugin + awesomeness ~" name="twitter:description" />
      <meta content="https://avatars1.githubusercontent.com/u/136959?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="Mottie/tablesorter" property="og:title" /><meta content="https://github.com/Mottie/tablesorter" property="og:url" /><meta content="Github fork of Christian Bach&#39;s tablesorter plugin + awesomeness ~" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NDM4Mjk1MzoyYjhhZmMzMjgyYzAxYzhjNWFlODY1NjExNTc1MWI0OTpiMGI5MWUxYmViMDVkNTU5MDM1ZTMyMzZiYTQ4NDM4OTJkMDgwYWI1ZWIzNzcxYTg2ODM3NjllY2NiNGMzZjJk--e70e9ba41c584c9ff3a82663f97ed18d499f920f">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="48E51904:6457:ACD0ADC:57300FAB" name="octolytics-dimension-request_id" /><meta content="4382953" name="octolytics-actor-id" /><meta content="garimasoni32" name="octolytics-actor-login" /><meta content="fd6de95ded2f857b992f6edb12b656257ee380f1839b4d6043ecefc54b5e1c15" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="garimasoni32">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="ZTE3MDczYWQ5ZjU2MDNmZDFiNzJjNmNlMzNiZDM2NWJkZDY5NWYyMTZhMTkzNjQ4OTViYjFkYjg0ZDczZDcwN3x7InJlbW90ZV9hZGRyZXNzIjoiNzIuMjI5LjI1LjQiLCJyZXF1ZXN0X2lkIjoiNDhFNTE5MDQ6NjQ1NzpBQ0QwQURDOjU3MzAwRkFCIiwidGltZXN0YW1wIjoxNDYyNzY3NTMxfQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="36d1fd388db8e8a820bf316972d910fc">
    

      
  <meta name="description" content="Github fork of Christian Bach&#39;s tablesorter plugin + awesomeness ~">
  <meta name="go-import" content="github.com/Mottie/tablesorter git https://github.com/Mottie/tablesorter.git">

  <meta content="136959" name="octolytics-dimension-user_id" /><meta content="Mottie" name="octolytics-dimension-user_login" /><meta content="1938370" name="octolytics-dimension-repository_id" /><meta content="Mottie/tablesorter" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1938370" name="octolytics-dimension-repository_network_root_id" /><meta content="Mottie/tablesorter" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Mottie/tablesorter/commits/master.atom" rel="alternate" title="Recent Commits to tablesorter:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/Mottie/tablesorter/blob/master/js/jquery.tablesorter.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production macintosh vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Mottie/tablesorter/search" class="js-site-search-form" data-scoped-search-url="/Mottie/tablesorter/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="notification-changed-v2:4382953" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Mottie/tablesorter">This repository</span>
  </div>
    <a class="dropdown-item" href="/Mottie/tablesorter/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/garimasoni32"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@garimasoni32" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/4382953?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">garimasoni32</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/garimasoni32" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NdRSdgvSRX51C3Nzq/TV9H4wWjN9TpcEuomqD+ikFUL7ndsNazjtCTShQKfU2YlUD1TzcDXDgy+su+8tqciZAg==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      
<div class="flash flash-full js-notice flash-warn">
<div class="container">
      <h4 class="flash-content">
        You don’t have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
      </h4>
      Email verification helps our support team verify ownership if you lose account access
        and allows you to receive all the notifications you ask for.

















</div>
</div>


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="AXXIZhh4Cg0NDaKAsSyr+i2YBCc6LGjYcnJH2tGHGi6D1WWLpZsKqXkyFeCXHVMUJiDiuyTZpfoyErJrBIyTnw==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="1938370" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Mottie/tablesorter/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/Mottie/tablesorter/watchers">
            109
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Mottie/tablesorter/unstar" class="starred" data-form-nonce="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tIo1kxpFe8vGPLEPASS1dznuzT7AJUzQLHrDhAc52GKBHvcqYeZVKKccz57650b4faj/iTfvteixSL138pMTkQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Mottie/tablesorter"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Mottie/tablesorter/stargazers">
          1,697
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Mottie/tablesorter/star" class="unstarred" data-form-nonce="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PnxsUJnJcsPmalxFqDjcwfbERKlkmL7RpvwCgS9Gm4kusc69VmTW9Fqyg4IfUJcE/NN44VXuK0VLuNbKIpXg5g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Mottie/tablesorter"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/Mottie/tablesorter/stargazers">
          1,697
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Mottie/tablesorter/fork" class="btn-with-count" data-form-nonce="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="x6uH0cHfrMiy7qTQ1Ey0F/CTpP+zzwqY3NLwDxRYvsXG9VHfS5mEgIW4C7C3ajav76WCSX1FgG8pXBdEahkNzA==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Mottie/tablesorter to your account"
                aria-label="Fork your own copy of Mottie/tablesorter to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/Mottie/tablesorter/network" class="social-count">
      445
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/Mottie" class="url fn" rel="author">Mottie</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/Mottie/tablesorter" data-pjax="#js-repo-pjax-container">tablesorter</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Mottie/tablesorter" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Mottie/tablesorter" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/Mottie/tablesorter/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Mottie/tablesorter/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">60</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Mottie/tablesorter/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Mottie/tablesorter/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">1</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/Mottie/tablesorter/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Mottie/tablesorter/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>

  <a href="/Mottie/tablesorter/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Mottie/tablesorter/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/Mottie/tablesorter/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /Mottie/tablesorter/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/Mottie/tablesorter/blob/f7ec767616135b0937a7d9fc2aa214ac63930c5e/js/jquery.tablesorter.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:71664526f0741be2c08397229fef6cd5 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Mottie/tablesorter/blob/development/js/jquery.tablesorter.js"
               data-name="development"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="development">
                development
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Mottie/tablesorter/blob/gh-pages/js/jquery.tablesorter.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Mottie/tablesorter/blob/master/js/jquery.tablesorter.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.26.0/js/jquery.tablesorter.js"
              data-name="v2.26.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.26.0">
                v2.26.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.9/js/jquery.tablesorter.js"
              data-name="v2.25.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.9">
                v2.25.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.8/js/jquery.tablesorter.js"
              data-name="v2.25.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.8">
                v2.25.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.7/js/jquery.tablesorter.js"
              data-name="v2.25.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.7">
                v2.25.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.6/js/jquery.tablesorter.js"
              data-name="v2.25.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.6">
                v2.25.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.5/js/jquery.tablesorter.js"
              data-name="v2.25.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.5">
                v2.25.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.4/js/jquery.tablesorter.js"
              data-name="v2.25.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.4">
                v2.25.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.3/js/jquery.tablesorter.js"
              data-name="v2.25.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.3">
                v2.25.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.2/js/jquery.tablesorter.js"
              data-name="v2.25.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.2">
                v2.25.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.1/js/jquery.tablesorter.js"
              data-name="v2.25.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.1">
                v2.25.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.25.0/js/jquery.tablesorter.js"
              data-name="v2.25.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.25.0">
                v2.25.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.24.6/js/jquery.tablesorter.js"
              data-name="v2.24.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.6">
                v2.24.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.24.5/js/jquery.tablesorter.js"
              data-name="v2.24.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.5">
                v2.24.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.24.4/js/jquery.tablesorter.js"
              data-name="v2.24.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.4">
                v2.24.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.24.3/js/jquery.tablesorter.js"
              data-name="v2.24.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.3">
                v2.24.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.24.2/js/jquery.tablesorter.js"
              data-name="v2.24.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.2">
                v2.24.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.24.1/js/jquery.tablesorter.js"
              data-name="v2.24.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.1">
                v2.24.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.24.0/js/jquery.tablesorter.js"
              data-name="v2.24.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.24.0">
                v2.24.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.23.5/js/jquery.tablesorter.js"
              data-name="v2.23.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.5">
                v2.23.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.23.4/js/jquery.tablesorter.js"
              data-name="v2.23.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.4">
                v2.23.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.23.3/js/jquery.tablesorter.js"
              data-name="v2.23.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.3">
                v2.23.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.23.2/js/jquery.tablesorter.js"
              data-name="v2.23.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.2">
                v2.23.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.23.1/js/jquery.tablesorter.js"
              data-name="v2.23.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.1">
                v2.23.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.23.0/js/jquery.tablesorter.js"
              data-name="v2.23.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.23.0">
                v2.23.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.22.5/js/jquery.tablesorter.js"
              data-name="v2.22.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.5">
                v2.22.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.22.4/js/jquery.tablesorter.js"
              data-name="v2.22.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.4">
                v2.22.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.22.3/js/jquery.tablesorter.js"
              data-name="v2.22.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.3">
                v2.22.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.22.2/js/jquery.tablesorter.js"
              data-name="v2.22.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.2">
                v2.22.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.22.1/js/jquery.tablesorter.js"
              data-name="v2.22.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.1">
                v2.22.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.22.0/js/jquery.tablesorter.js"
              data-name="v2.22.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.22.0">
                v2.22.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.21.5/js/jquery.tablesorter.js"
              data-name="v2.21.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.5">
                v2.21.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.21.4/js/jquery.tablesorter.js"
              data-name="v2.21.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.4">
                v2.21.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.21.3/js/jquery.tablesorter.js"
              data-name="v2.21.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.3">
                v2.21.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.21.2/js/jquery.tablesorter.js"
              data-name="v2.21.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.2">
                v2.21.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.21.1/js/jquery.tablesorter.js"
              data-name="v2.21.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.1">
                v2.21.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.21.0/js/jquery.tablesorter.js"
              data-name="v2.21.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.21.0">
                v2.21.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.20.1/js/jquery.tablesorter.js"
              data-name="v2.20.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.1">
                v2.20.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.20.0/js/jquery.tablesorter.js"
              data-name="v2.20.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.20.0">
                v2.20.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.19.1/js/jquery.tablesorter.js"
              data-name="v2.19.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.19.1">
                v2.19.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.19.0/js/jquery.tablesorter.js"
              data-name="v2.19.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.19.0">
                v2.19.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.18.4/js/jquery.tablesorter.js"
              data-name="v2.18.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.18.4">
                v2.18.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.18.3/js/jquery.tablesorter.js"
              data-name="v2.18.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.18.3">
                v2.18.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.18.2/js/jquery.tablesorter.js"
              data-name="v2.18.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.18.2">
                v2.18.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.18.1/js/jquery.tablesorter.js"
              data-name="v2.18.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.18.1">
                v2.18.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.18.0/js/jquery.tablesorter.js"
              data-name="v2.18.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.18.0">
                v2.18.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.8/js/jquery.tablesorter.js"
              data-name="v2.17.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.8">
                v2.17.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.7/js/jquery.tablesorter.js"
              data-name="v2.17.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.7">
                v2.17.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.6/js/jquery.tablesorter.js"
              data-name="v2.17.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.6">
                v2.17.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.5/js/jquery.tablesorter.js"
              data-name="v2.17.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.5">
                v2.17.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.4/js/jquery.tablesorter.js"
              data-name="v2.17.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.4">
                v2.17.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.3/js/jquery.tablesorter.js"
              data-name="v2.17.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.3">
                v2.17.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.2/js/jquery.tablesorter.js"
              data-name="v2.17.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.2">
                v2.17.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.1/js/jquery.tablesorter.js"
              data-name="v2.17.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.1">
                v2.17.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.17.0/js/jquery.tablesorter.js"
              data-name="v2.17.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.17.0">
                v2.17.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.16.4/js/jquery.tablesorter.js"
              data-name="v2.16.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.4">
                v2.16.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.16.3/js/jquery.tablesorter.js"
              data-name="v2.16.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.3">
                v2.16.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.16.2/js/jquery.tablesorter.js"
              data-name="v2.16.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.2">
                v2.16.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.16.1/js/jquery.tablesorter.js"
              data-name="v2.16.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.1">
                v2.16.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.16.1-beta/js/jquery.tablesorter.js"
              data-name="v2.16.1-beta"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.1-beta">
                v2.16.1-beta
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.16.0/js/jquery.tablesorter.js"
              data-name="v2.16.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.0">
                v2.16.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.16.0-beta/js/jquery.tablesorter.js"
              data-name="v2.16.0-beta"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.16.0-beta">
                v2.16.0-beta
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.14/js/jquery.tablesorter.js"
              data-name="v2.15.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.14">
                v2.15.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.13/js/jquery.tablesorter.js"
              data-name="v2.15.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.13">
                v2.15.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.12/js/jquery.tablesorter.js"
              data-name="v2.15.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.12">
                v2.15.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.10/js/jquery.tablesorter.js"
              data-name="v2.15.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.10">
                v2.15.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.9/js/jquery.tablesorter.js"
              data-name="v2.15.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.9">
                v2.15.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.8/js/jquery.tablesorter.js"
              data-name="v2.15.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.8">
                v2.15.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.7/js/jquery.tablesorter.js"
              data-name="v2.15.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.7">
                v2.15.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.6/js/jquery.tablesorter.js"
              data-name="v2.15.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.6">
                v2.15.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.5/js/jquery.tablesorter.js"
              data-name="v2.15.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.5">
                v2.15.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.4/js/jquery.tablesorter.js"
              data-name="v2.15.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.4">
                v2.15.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.3/js/jquery.tablesorter.js"
              data-name="v2.15.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.3">
                v2.15.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.2/js/jquery.tablesorter.js"
              data-name="v2.15.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.2">
                v2.15.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.1/js/jquery.tablesorter.js"
              data-name="v2.15.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.1">
                v2.15.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.15.0/js/jquery.tablesorter.js"
              data-name="v2.15.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.15.0">
                v2.15.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.14.5/js/jquery.tablesorter.js"
              data-name="v2.14.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.5">
                v2.14.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.14.4/js/jquery.tablesorter.js"
              data-name="v2.14.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.4">
                v2.14.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.14.3/js/jquery.tablesorter.js"
              data-name="v2.14.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.3">
                v2.14.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.14.2/js/jquery.tablesorter.js"
              data-name="v2.14.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.2">
                v2.14.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.14.1/js/jquery.tablesorter.js"
              data-name="v2.14.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.1">
                v2.14.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.14.0/js/jquery.tablesorter.js"
              data-name="v2.14.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.14.0">
                v2.14.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.13.3/js/jquery.tablesorter.js"
              data-name="v2.13.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.13.3">
                v2.13.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.13.2/js/jquery.tablesorter.js"
              data-name="v2.13.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.13.2">
                v2.13.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.13.1/js/jquery.tablesorter.js"
              data-name="v2.13.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.13.1">
                v2.13.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.13.0/js/jquery.tablesorter.js"
              data-name="v2.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.13.0">
                v2.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.12.0/js/jquery.tablesorter.js"
              data-name="v2.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.12.0">
                v2.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.11.1/js/jquery.tablesorter.js"
              data-name="v2.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.11.1">
                v2.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.11.0/js/jquery.tablesorter.js"
              data-name="v2.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.11.0">
                v2.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.8/js/jquery.tablesorter.js"
              data-name="v2.10.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.8">
                v2.10.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.7/js/jquery.tablesorter.js"
              data-name="v2.10.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.7">
                v2.10.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.6/js/jquery.tablesorter.js"
              data-name="v2.10.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.6">
                v2.10.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.5/js/jquery.tablesorter.js"
              data-name="v2.10.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.5">
                v2.10.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.4/js/jquery.tablesorter.js"
              data-name="v2.10.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.4">
                v2.10.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.3/js/jquery.tablesorter.js"
              data-name="v2.10.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.3">
                v2.10.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.2/js/jquery.tablesorter.js"
              data-name="v2.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.2">
                v2.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.1/js/jquery.tablesorter.js"
              data-name="v2.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.1">
                v2.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.10.0/js/jquery.tablesorter.js"
              data-name="v2.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.10.0">
                v2.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.9.1/js/jquery.tablesorter.js"
              data-name="v2.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.9.1">
                v2.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.9.0/js/jquery.tablesorter.js"
              data-name="v2.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.9.0">
                v2.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Mottie/tablesorter/tree/v2.8.2/js/jquery.tablesorter.js"
              data-name="v2.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.8.2">
                v2.8.2
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/Mottie/tablesorter/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/Mottie/tablesorter"><span>tablesorter</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/Mottie/tablesorter/tree/master/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">jquery.tablesorter.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/Mottie/tablesorter/contributors/master/js/jquery.tablesorter.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/Mottie/tablesorter/raw/master/js/jquery.tablesorter.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/Mottie/tablesorter/blame/master/js/jquery.tablesorter.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/Mottie/tablesorter/commits/master/js/jquery.tablesorter.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-mac://openRepo/https://github.com/Mottie/tablesorter?branch=master&amp;filepath=js%2Fjquery.tablesorter.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Mottie/tablesorter/edit/master/js/jquery.tablesorter.js" class="inline-form js-update-url-with-hash" data-form-nonce="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cIjy6aihBfgXm8OmZZWcc6Sp8SLzm5uCxFIerZ4E2B0EXz+NfU85KuLFBeMBccKnqQZ9Ez0pRpHlQ2eFMCKiPg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Mottie/tablesorter/delete/master/js/jquery.tablesorter.js" class="inline-form" data-form-nonce="13b48f0e8de9c6298e2cf2cc9bc0e3737bbe504e" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="djao+9i2GKP3n/JnWqqchJijTdUrGoVKdTVI6rXESel9IqLYNBIVoTTxXiVWwrIkAR5NCTkzq3kwUfYmfg5y+w==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      2732 lines (2597 sloc)
      <span class="file-info-divider"></span>
    99.3 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! TableSorter (FORK) v2.26.0 *//*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Client-side table sorting with ease!</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @requires jQuery v1.2.6+</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Copyright (c) 2007 Christian Bach</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* fork maintained by Rob Garrison</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Examples and docs at: http://tablesorter.com</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Dual licensed under the MIT and GPL licenses:</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* http://www.gnu.org/licenses/gpl.html</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @type jQuery</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @name tablesorter (FORK)</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @cat Plugins/Tablesorter</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @author Christian Bach - christian.bach@polyester.se</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* @contributor Rob Garrison - https://github.com/Mottie/tablesorter</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*jshint browser:true, jquery:true, unused:false, expr: true */</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">;( <span class="pl-k">function</span>( <span class="pl-smi">$</span> ) {</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">	<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> ts <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">tablesorter</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">		version <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2.26.0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">		parsers <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">		widgets <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">		defaults <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** appearance</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">			theme            <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>default<span class="pl-pds">&#39;</span></span>,  <span class="pl-c">// adds tablesorter-{theme} to the table for styling</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">			widthFixed       <span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// adds colgroup to fix widths of columns</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">			showProcessing   <span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// show an indeterminate timer icon in the header when the table is sorted or filtered.</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			headerTemplate   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{content}<span class="pl-pds">&#39;</span></span>,<span class="pl-c">// header layout template (HTML ok); {content} = innerHTML, {icon} = &lt;i/&gt; // class from cssIcon</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">			onRenderTemplate <span class="pl-k">:</span> <span class="pl-c1">null</span>,       <span class="pl-c">// function( index, template ){ return template; }, // template is a string</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">			onRenderHeader   <span class="pl-k">:</span> <span class="pl-c1">null</span>,       <span class="pl-c">// function( index ){}, // nothing to return</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** functionality</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">			cancelSelection  <span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// prevent text selection in the header</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">			tabIndex         <span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// add tabindex to header for keyboard accessibility</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">			dateFormat       <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mmddyyyy<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// other options: &#39;ddmmyyy&#39; or &#39;yyyymmdd&#39;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">			sortMultiSortKey <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>shiftKey<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// key used to select additional columns</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">			sortResetKey     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ctrlKey<span class="pl-pds">&#39;</span></span>,  <span class="pl-c">// key used to remove sorting on a column</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">			usNumberFormat   <span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// false for German &#39;1.234.567,89&#39; or French &#39;1 234 567,89&#39;</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">			delayInit        <span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// if false, the parsed table contents will not update until the first sort</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">			serverSideSorting<span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// if true, server-side sorting should be performed because client-side sorting will be disabled, but the ui and events will still be used.</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">			resort           <span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// default setting to trigger a resort after an &#39;update&#39;, &#39;addRows&#39;, &#39;updateCell&#39;, etc has completed</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** sort options</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">			headers          <span class="pl-k">:</span> {},         <span class="pl-c">// set sorter, string, empty, locked order, sortInitialOrder, filter, etc.</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">			ignoreCase       <span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// ignore case while sorting</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">			sortForce        <span class="pl-k">:</span> <span class="pl-c1">null</span>,       <span class="pl-c">// column(s) first sorted; always applied</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">			sortList         <span class="pl-k">:</span> [],         <span class="pl-c">// Initial sort order; applied initially; updated when manually sorted</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">			sortAppend       <span class="pl-k">:</span> <span class="pl-c1">null</span>,       <span class="pl-c">// column(s) sorted last; always applied</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">			sortStable       <span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// when sorting two rows with exactly the same content, the original sort order is maintained</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			sortInitialOrder <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>asc<span class="pl-pds">&#39;</span></span>,      <span class="pl-c">// sort direction on first click</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">			sortLocaleCompare<span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// replace equivalent character (accented characters)</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			sortReset        <span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// third click on the header will reset column to default - unsorted</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			sortRestart      <span class="pl-k">:</span> <span class="pl-c1">false</span>,      <span class="pl-c">// restart sort to &#39;sortInitialOrder&#39; when clicking on previously unsorted columns</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">			emptyTo          <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>,   <span class="pl-c">// sort empty cell to bottom, top, none, zero, emptyMax, emptyMin</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">			stringTo         <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>max<span class="pl-pds">&#39;</span></span>,      <span class="pl-c">// sort strings in numerical column as max, min, top, bottom, zero</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">			duplicateSpan    <span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// colspan cells in the tbody will have duplicated content in the cache for each spanned column</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">			textExtraction   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>basic<span class="pl-pds">&#39;</span></span>,    <span class="pl-c">// text extraction method/function - function( node, table, cellIndex ){}</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">			textAttribute    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>data-text<span class="pl-pds">&#39;</span></span>,<span class="pl-c">// data-attribute that contains alternate cell text (used in default textExtraction function)</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">			textSorter       <span class="pl-k">:</span> <span class="pl-c1">null</span>,       <span class="pl-c">// choose overall or specific column sorter function( a, b, direction, table, columnIndex ) [alt: ts.sortText]</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">			numberSorter     <span class="pl-k">:</span> <span class="pl-c1">null</span>,       <span class="pl-c">// choose overall numeric sorter function( a, b, direction, maxColumnValue )</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** widget options</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			widgets<span class="pl-k">:</span> [],                   <span class="pl-c">// method to add widgets, e.g. widgets: [&#39;zebra&#39;]</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			widgetOptions    <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">				zebra <span class="pl-k">:</span> [ <span class="pl-s"><span class="pl-pds">&#39;</span>even<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>odd<span class="pl-pds">&#39;</span></span> ]    <span class="pl-c">// zebra widget alternating row class names</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">			initWidgets      <span class="pl-k">:</span> <span class="pl-c1">true</span>,       <span class="pl-c">// apply widgets on tablesorter initialization</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">			widgetClass      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>widget-{name}<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// table class name template to match to include a widget</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** callbacks</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">			initialized      <span class="pl-k">:</span> <span class="pl-c1">null</span>,       <span class="pl-c">// function( table ){},</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** extra css class names</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">			tableClass       <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">			cssAsc           <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">			cssDesc          <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">			cssNone          <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">			cssHeader        <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">			cssHeaderRow     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">			cssProcessing    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, <span class="pl-c">// processing icon applied to header during sort/filter</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">			cssChildRow      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-childRow<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// class name indiciating that a row is to be attached to the its parent</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">			cssInfoBlock     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-infoOnly<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// don&#39;t sort tbody with this class name (only one class name allowed here!)</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			cssNoSort        <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-noSort<span class="pl-pds">&#39;</span></span>,      <span class="pl-c">// class name added to element inside header; clicking on it won&#39;t cause a sort</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">			cssIgnoreRow     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-ignoreRow<span class="pl-pds">&#39;</span></span>,   <span class="pl-c">// header row to ignore; cells within this row will not be added to c.$headers</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">			cssIcon          <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-icon<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// if this class does not exist, the {icon} will not be added from the headerTemplate</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">			cssIconNone      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, <span class="pl-c">// class name added to the icon when there is no column sort</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">			cssIconAsc       <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, <span class="pl-c">// class name added to the icon when the column has an ascending sort</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">			cssIconDesc      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, <span class="pl-c">// class name added to the icon when the column has a descending sort</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** events</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">			pointerClick     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">			pointerDown      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mousedown<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">			pointerUp        <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mouseup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** selectors</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">			selectorHeaders  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&gt; thead th, &gt; thead td<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">			selectorSort     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>th, td<span class="pl-pds">&#39;</span></span>,   <span class="pl-c">// jQuery selector of content within selectorHeaders that is clickable to trigger a sort</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">			selectorRemove   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.remove-me<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** advanced</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">			debug            <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** Internal variables</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">			headerList<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">			empties<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">			strings<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">			parsers<span class="pl-k">:</span> []</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// removed: widgetZebra: { css: [&#39;even&#39;, &#39;odd&#39;] }</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// internal css classes - these will ALWAYS be added to</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// the table and MUST only contain one class name - fixes #381</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">		css <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">			table      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">			cssHasChild<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-hasChildRow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">			childRow   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-childRow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">			colgroup   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-colgroup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">			header     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-header<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">			headerRow  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-headerRow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			headerIn   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-header-inner<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">			icon       <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-icon<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">			processing <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-processing<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			sortAsc    <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-headerAsc<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			sortDesc   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-headerDesc<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">			sortNone   <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-headerUnSorted<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// labels applied to sortable headers for accessibility (aria) support</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">		language <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">			sortAsc      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Ascending sort applied, <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">			sortDesc     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Descending sort applied, <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">			sortNone     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>No sort applied, <span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">			sortDisabled <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sorting is disabled<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">			nextAsc      <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>activate to apply an ascending sort<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">			nextDesc     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>activate to apply a descending sort<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">			nextNone     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>activate to remove the sort<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">		regex <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">			templateContent <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\{</span>content<span class="pl-cce">\}</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">			templateIcon    <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\{</span>icon<span class="pl-cce">\}</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">			templateName    <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\{</span>name<span class="pl-cce">\}</span><span class="pl-pds">/</span>i</span>,</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">			spaces          <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">			nonWord         <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">\W</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">			formElements    <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>(input<span class="pl-k">|</span>select<span class="pl-k">|</span>button<span class="pl-k">|</span>textarea)<span class="pl-pds">/</span>i</span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** sort functions ***</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// regex used in natural sort</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// chunk/tokenize numbers &amp; letters</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">			chunk  <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-k">^</span>(<span class="pl-c1">[+<span class="pl-cce">\-</span>]</span><span class="pl-k">?</span>(?:<span class="pl-c1">\d</span><span class="pl-k">*</span>)(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">*</span>)<span class="pl-k">?</span>(?:<span class="pl-c1">[eE][+<span class="pl-cce">\-</span>]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-k">|</span><span class="pl-k">^</span>0x<span class="pl-c1">[<span class="pl-c1">0-9a-f</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-k">|</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>gi</span>,</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// replace chunks @ ends</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">			chunks <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-k">^</span><span class="pl-cce">\\</span>0<span class="pl-k">|</span><span class="pl-cce">\\</span>0<span class="pl-k">$</span>)<span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">			hex    <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>0x<span class="pl-c1">[<span class="pl-c1">0-9a-f</span>]</span><span class="pl-k">+</span><span class="pl-k">$</span><span class="pl-pds">/</span>i</span>,</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** formatFloat ***</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">			comma                <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span>,<span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">			digitNonUS           <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s</span>|<span class="pl-cce">\.</span>]</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">			digitNegativeTest    <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\(</span><span class="pl-c1">[<span class="pl-c1">.\d</span>]</span><span class="pl-k">+</span><span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">			digitNegativeReplace <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\(</span>(<span class="pl-c1">[<span class="pl-c1">.\d</span>]</span><span class="pl-k">+</span>)<span class="pl-cce">\)</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// *** isDigit ***</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">			digitTest    <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">\-+</span>(]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-c1">[)]</span><span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			digitReplace <span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[,<span class="pl-c1">.</span>&#39;&quot;<span class="pl-c1">\s</span>]</span><span class="pl-pds">/</span>g</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// digit sort, text location</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">		string <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">			max      <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">			min      <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">			emptymin <span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">			emptymax <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">			zero     <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">			none     <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>null<span class="pl-pds">&#39;</span></span>   <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">			top      <span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">			bottom   <span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		keyCodes <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">			enter <span class="pl-k">:</span> <span class="pl-c1">13</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// placeholder date parser data (globalize)</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">		dates <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// These methods can be applied on table.config instance</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		instanceMethods <span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▄█████ ██████ ██████ ██  ██ █████▄</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▀█▄    ██▄▄     ██   ██  ██ ██▄▄██</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		   ▀█▄ ██▀▀     ██   ██  ██ ██▀▀▀</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		█████▀ ██████   ██   ▀████▀ ██</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setup</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// if no thead or tbody, or tablesorter is already present, quit</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>table <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">table</span>.<span class="pl-c1">tHead</span> <span class="pl-k">||</span> <span class="pl-smi">table</span>.<span class="pl-c1">tBodies</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> <span class="pl-k">===</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> ) {</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Stopping initialization. Tablesorter has already been initialized<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>.<span class="pl-c1">error</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Stopping initialization! No table, thead or tbody<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tmp <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">				$table <span class="pl-k">=</span> <span class="pl-en">$</span>( table ),</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">				meta <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">metadata</span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// initialization flag</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// table is being processed flag</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">isProcessing</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// make sure to store the config object</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">config</span> <span class="pl-k">=</span> c;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// save the settings where they read</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-c1">data</span>( table, <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter<span class="pl-pds">&#39;</span></span>, c );</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">group</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>group<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( <span class="pl-s"><span class="pl-pds">&#39;</span>Initializing tablesorter<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$</span>.<span class="pl-c1">data</span>( table, <span class="pl-s"><span class="pl-pds">&#39;</span>startoveralltimer<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">Date</span>() );</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// removing this in version 3 (only supports jQuery 1.7+)</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">supportsDataObject</span> <span class="pl-k">=</span> ( <span class="pl-k">function</span>( <span class="pl-smi">version</span> ) {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">				version[ <span class="pl-c1">0</span> ] <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( version[ <span class="pl-c1">0</span> ], <span class="pl-c1">10</span> );</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> ( version[ <span class="pl-c1">0</span> ] <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> ) <span class="pl-k">||</span> ( version[ <span class="pl-c1">0</span> ] <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">parseInt</span>( version[ <span class="pl-c1">1</span> ], <span class="pl-c1">10</span> ) <span class="pl-k">&gt;=</span> <span class="pl-c1">4</span> );</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">			})( <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">jquery</span>.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// ensure case insensitivity</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">emptyTo</span> <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">emptyTo</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">stringTo</span> <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">stringTo</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">last</span> <span class="pl-k">=</span> { sortList <span class="pl-k">:</span> [], clickedIndex <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span> };</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// add table theme class only if there isn&#39;t already one there</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-sr"><span class="pl-pds">/</span>tablesorter<span class="pl-cce">\-</span><span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>( <span class="pl-smi">$table</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span> ) ) ) {</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">theme</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> tablesorter-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">theme</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">table</span> <span class="pl-k">=</span> table;</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span> <span class="pl-k">=</span> $table</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">addClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">table</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">tableClass</span> <span class="pl-k">+</span> tmp )</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>grid<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$headers</span> <span class="pl-k">=</span> <span class="pl-smi">$table</span>.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorHeaders</span> );</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// give the table a unique id, which will be used in namespace binding</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> ) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.tablesorter<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">Math</span>.<span class="pl-c1">random</span>().<span class="pl-c1">toString</span>( <span class="pl-c1">16</span> ).<span class="pl-c1">slice</span>( <span class="pl-c1">2</span> );</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// make sure namespace starts with a period &amp; doesn&#39;t have weird characters</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">nonWord</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>().<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span> <span class="pl-k">=</span> <span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tbody:not(.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssInfoBlock</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">attr</span>({</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>aria-live<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>polite<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>aria-relevant<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>caption<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>caption<span class="pl-pds">&#39;</span></span> )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">tmp</span>.<span class="pl-c1">id</span> ) { <span class="pl-smi">tmp</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span>.<span class="pl-c1">slice</span>( <span class="pl-c1">1</span> ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>caption<span class="pl-pds">&#39;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-labelledby<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">tmp</span>.<span class="pl-c1">id</span> );</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">widgetInit</span> <span class="pl-k">=</span> {}; <span class="pl-c">// keep a list of initialized widgets</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// change textExtraction via data-attribute</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">textExtraction</span> <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-text-extraction<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">textExtraction</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>basic<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// build headers</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">buildHeaders</span>( c );</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// fixate columns if the users supplies the fixedWidth option</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// do this after theme has been applied</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">fixColumnWidth</span>( table );</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// add widgets from class name</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">addWidgetFromClass</span>( table );</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// add widget options before parsing (e.g. grouping widget has parser settings)</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">applyWidgetOptions</span>( table );</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// try to auto detect column type, and store in tables config</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">setupParsers</span>( c );</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// start total row count at zero</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">totalRows</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// build the cache for the tbody cells</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// delayInit will delay building the cache until the user starts a sort</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">delayInit</span> ) { <span class="pl-smi">ts</span>.<span class="pl-en">buildCache</span>( c ); }</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// bind all header events and methods</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">bindEvents</span>( table, <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">bindMethods</span>( c );</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// get sort list from jQuery data or metadata</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// in jQuery &lt; 1.4, an error occurs when calling $table.data()</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">supportsDataObject</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">$table</span>.<span class="pl-c1">data</span>().<span class="pl-smi">sortlist</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> <span class="pl-smi">$table</span>.<span class="pl-c1">data</span>().<span class="pl-smi">sortlist</span>;</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( meta <span class="pl-k">&amp;&amp;</span> ( <span class="pl-smi">$table</span>.<span class="pl-en">metadata</span>() <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$table</span>.<span class="pl-en">metadata</span>().<span class="pl-smi">sortlist</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> <span class="pl-smi">$table</span>.<span class="pl-en">metadata</span>().<span class="pl-smi">sortlist</span>;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// apply widget init code</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( table, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// if user has supplied a sort list to constructor</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">sortOn</span>( c, <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>, {}, <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">initWidgets</span> );</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">setHeadersCss</span>( c );</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">initWidgets</span> ) {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// apply widget format</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( table, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// show processesing icon</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">showProcessing</span> ) {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">				$table</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">unbind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortBegin<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> sortEnd<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> )</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortBegin<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> sortEnd<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span>, <span class="pl-k">function</span>( <span class="pl-smi">e</span> ) {</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">clearTimeout</span>( <span class="pl-smi">c</span>.<span class="pl-smi">timerProcessing</span> );</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">isProcessing</span>( table );</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">e</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sortBegin<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">c</span>.<span class="pl-smi">timerProcessing</span> <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>( <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">ts</span>.<span class="pl-en">isProcessing</span>( table, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">						}, <span class="pl-c1">500</span> );</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// initialized</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">isProcessing</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Overall initialization time: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( <span class="pl-smi">$</span>.<span class="pl-c1">data</span>( table, <span class="pl-s"><span class="pl-pds">&#39;</span>startoveralltimer<span class="pl-pds">&#39;</span></span> ) ) );</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">console</span>.<span class="pl-smi">groupEnd</span> ) { <span class="pl-en">console</span>.<span class="pl-en">groupEnd</span>(); }</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-initialized<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> <span class="pl-smi">c</span>.<span class="pl-smi">initialized</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-en">initialized</span>( table );</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">bindMethods</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> $table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>,</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">				namespace <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span>,</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">				events <span class="pl-k">=</span> ( <span class="pl-s"><span class="pl-pds">&#39;</span>sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span>mouseleave <span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">					.<span class="pl-c1">join</span>( namespace <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// apply easy methods that trigger bound events</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">			$table</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">unbind</span>( <span class="pl-smi">events</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">spaces</span>, <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortReset<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// using this.config to ensure functions are getting a non-cached version of the config</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">sortReset</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, callback );</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateAll<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">updateAll</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, resort, callback );</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>update<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> updateRows<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">update</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, resort, callback );</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateHeaders<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">updateHeaders</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, callback );</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateCell<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">cell</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">updateCell</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, cell, resort, callback );</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>addRows<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">$row</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">addRows</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, $row, resort, callback );</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateComplete<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sorton<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">list</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">init</span> ) {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">sortOn</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, list, callback, init );</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>appendCache<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">init</span> ) {</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">appendCache</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, init );</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">$</span>.<span class="pl-en">isFunction</span>( callback ) ) {</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">callback</span>( <span class="pl-v">this</span> );</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// $tbodies variable is used by the tbody sorting widget</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateCache<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">$tbodies</span> ) {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">updateCache</span>( <span class="pl-v">this</span>.<span class="pl-smi">config</span>, callback, $tbodies );</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>applyWidgetId<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">id</span> ) {</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">applyWidgetId</span>( <span class="pl-v">this</span>, id );</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>applyWidgets<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">init</span> ) {</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// apply widgets</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( <span class="pl-v">this</span>, init );</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>refreshWidgets<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">all</span>, <span class="pl-smi">dontapply</span> ) {</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">refreshWidgets</span>( <span class="pl-v">this</span>, all, dontapply );</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>removeWidget<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">name</span>, <span class="pl-smi">refreshing</span> ) {</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">removeWidget</span>( <span class="pl-v">this</span>, name, refreshing );</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>destroy<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">removeClasses</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">destroy</span>( <span class="pl-v">this</span>, removeClasses, callback );</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">			})</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>resetToLoadState<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> namespace, <span class="pl-k">function</span>( <span class="pl-smi">e</span> ) {</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">e</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// remove all widgets</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">removeWidget</span>( <span class="pl-v">this</span>, <span class="pl-c1">true</span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// restore original settings; this clears out current settings, but does not clear</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// values saved to storage.</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>( <span class="pl-c1">true</span>, <span class="pl-smi">ts</span>.<span class="pl-smi">defaults</span>, <span class="pl-smi">c</span>.<span class="pl-smi">originalSettings</span> );</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">				<span class="pl-v">this</span>.<span class="pl-smi">hasInitialized</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// setup the entire table again</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">setup</span>( <span class="pl-v">this</span>, c );</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">bindEvents</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">$headers</span>, <span class="pl-smi">core</span> ) {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tmp,</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">				namespace <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span>,</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">				downTarget <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( core <span class="pl-k">!==</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$headers</span>.<span class="pl-en">addClass</span>( <span class="pl-smi">namespace</span>.<span class="pl-c1">slice</span>( <span class="pl-c1">1</span> ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_extra_headers<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">closest</span> <span class="pl-k">?</span> <span class="pl-smi">$headers</span>.<span class="pl-en">closest</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span> )[ <span class="pl-c1">0</span> ] <span class="pl-k">:</span> <span class="pl-smi">$headers</span>.<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span> )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( tmp <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">tmp</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>TABLE<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> tmp <span class="pl-k">!==</span> table ) {</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">$</span>( tmp ).<span class="pl-en">addClass</span>( <span class="pl-smi">namespace</span>.<span class="pl-c1">slice</span>( <span class="pl-c1">1</span> ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_extra_table<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">			tmp <span class="pl-k">=</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">pointerDown</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">pointerUp</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">pointerClick</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> sort keyup <span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">spaces</span>, <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">join</span>( namespace <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// apply event handling to headers and/or additional headers (stickyheaders, scroller, etc)</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">			$headers</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// http://stackoverflow.com/questions/5312849/jquery-find-self;</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">			.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorSort</span> )</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">			.<span class="pl-c1">add</span>( <span class="pl-smi">$headers</span>.<span class="pl-en">filter</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorSort</span> ) )</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">unbind</span>( tmp )</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">			.<span class="pl-en">bind</span>( tmp, <span class="pl-k">function</span>( <span class="pl-smi">e</span>, <span class="pl-smi">external</span> ) {</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> $cell, cell, temp,</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">					$target <span class="pl-k">=</span> <span class="pl-en">$</span>( <span class="pl-smi">e</span>.<span class="pl-c1">target</span> ),</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// wrap event type in spaces, so the match doesn&#39;t trigger on inner words</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">					type <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">e</span>.<span class="pl-c1">type</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// only recognize left clicks</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( ( ( <span class="pl-smi">e</span>.<span class="pl-smi">which</span> <span class="pl-k">||</span> <span class="pl-smi">e</span>.<span class="pl-smi">button</span> ) <span class="pl-k">!==</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">type</span>.<span class="pl-c1">match</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">pointerClick</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> | sort | keyup <span class="pl-pds">&#39;</span></span> ) ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// allow pressing enter</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">					( type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span> keyup <span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">e</span>.<span class="pl-smi">which</span> <span class="pl-k">!==</span> <span class="pl-smi">ts</span>.<span class="pl-smi">keyCodes</span>.<span class="pl-smi">enter</span> ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// allow triggering a click event (e.which is undefined) &amp; ignore physical clicks</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">					( <span class="pl-smi">type</span>.<span class="pl-c1">match</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">pointerClick</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">e</span>.<span class="pl-smi">which</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) ) {</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// ignore mouseup if mousedown wasn&#39;t on the same target</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">type</span>.<span class="pl-c1">match</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">pointerUp</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) <span class="pl-k">&amp;&amp;</span> downTarget <span class="pl-k">!==</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span> <span class="pl-k">&amp;&amp;</span> external <span class="pl-k">!==</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// set target on mousedown</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">type</span>.<span class="pl-c1">match</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">pointerDown</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) ) {</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">					downTarget <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">target</span>;</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// preventDefault needed or jQuery v1.3.2 and older throws an</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// &quot;Uncaught TypeError: handler.apply is not a function&quot; error</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">					temp <span class="pl-k">=</span> <span class="pl-smi">$target</span>.<span class="pl-smi">jquery</span>.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( temp[ <span class="pl-c1">0</span> ] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> temp[ <span class="pl-c1">1</span> ] <span class="pl-k">&lt;</span> <span class="pl-c1">4</span> ) { <span class="pl-smi">e</span>.<span class="pl-en">preventDefault</span>(); }</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">				downTarget <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// prevent sort being triggered on form elements</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">formElements</span>.<span class="pl-c1">test</span>( <span class="pl-smi">e</span>.<span class="pl-c1">target</span>.<span class="pl-c1">nodeName</span> ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// nosort class name, or elements within a nosort container</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$target</span>.<span class="pl-en">hasClass</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cssNoSort</span> ) <span class="pl-k">||</span> <span class="pl-smi">$target</span>.<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssNoSort</span> ).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// elements within a button</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$target</span>.<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>button<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">cancelSelection</span>;</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">delayInit</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cache</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">buildCache</span>( c );</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// jQuery v1.2.6 doesn&#39;t have closest()</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">				$cell <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">closest</span> <span class="pl-k">?</span> <span class="pl-en">$</span>( <span class="pl-v">this</span> ).<span class="pl-en">closest</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>th, td<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line"><span class="pl-sr">					<span class="pl-pds">/</span>TH<span class="pl-k">|</span>TD<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>( <span class="pl-v">this</span>.<span class="pl-c1">nodeName</span> ) <span class="pl-k">?</span> <span class="pl-en">$</span>( <span class="pl-v">this</span> ) <span class="pl-k">:</span> <span class="pl-en">$</span>( <span class="pl-v">this</span> ).<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>th, td<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// reference original table headers and find the same cell</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// don&#39;t use $headers or IE8 throws an error - see #987</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">				temp <span class="pl-k">=</span> <span class="pl-smi">$headers</span>.<span class="pl-c1">index</span>( $cell );</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">last</span>.<span class="pl-smi">clickedIndex</span> <span class="pl-k">=</span> ( temp <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> ) <span class="pl-k">?</span> <span class="pl-smi">$cell</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span> temp;</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// use column index if $headers is undefined</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">				cell <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">last</span>.<span class="pl-smi">clickedIndex</span> ];</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( cell <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">cell</span>.<span class="pl-smi">sortDisabled</span> ) {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">initSort</span>( c, cell, e );</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">cancelSelection</span> ) {</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// cancel selection</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">				$headers</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>unselectable<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>on<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">bind</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>selectstart<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span> )</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">css</span>({</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&#39;</span>user-select<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&#39;</span>MozUserSelect<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span> <span class="pl-c">// not needed for jQuery 1.8+</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">buildHeaders</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> $temp, icon, timer, indx;</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">headerList</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">headerContent</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">				timer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// children tr in tfoot - see issue #196 &amp; #547</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// don&#39;t pass table.config to computeColumnIndex here - widgets (math) pass it to &quot;quickly&quot; index tbody cells</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">columns</span> <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">computeColumnIndex</span>( <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>thead, tfoot<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// add icon if cssIcon option exists</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">			icon <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssIcon</span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;i class=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">cssIcon</span> <span class="pl-k">===</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">icon</span> <span class="pl-k">?</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">icon</span> <span class="pl-k">:</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssIcon</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">icon</span> ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/i&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// redefine c.$headers here in case of an updateAll that replaces or adds an entire header cell - see #683</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$headers</span> <span class="pl-k">=</span> <span class="pl-en">$</span>( <span class="pl-smi">$</span>.<span class="pl-en">map</span>( <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorHeaders</span> ), <span class="pl-k">function</span>( <span class="pl-smi">elem</span>, <span class="pl-smi">index</span> ) {</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> configHeaders, header, column, template, tmp,</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">					$elem <span class="pl-k">=</span> <span class="pl-en">$</span>( elem );</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// ignore cell (don&#39;t add it to c.$headers) if row has ignoreRow class</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">$elem</span>.<span class="pl-c1">parent</span>().<span class="pl-en">hasClass</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cssIgnoreRow</span> ) ) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// make sure to get header cell &amp; not column indexed cell</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">				configHeaders <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getColumnData</span>( <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, <span class="pl-smi">c</span>.<span class="pl-c1">headers</span>, index, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// save original header content</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">headerContent</span>[ index ] <span class="pl-k">=</span> <span class="pl-smi">$elem</span>.<span class="pl-en">html</span>();</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// if headerTemplate is empty, don&#39;t reformat the header cell</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">headerTemplate</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">$elem</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">headerIn</span> ).<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// set up header template</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">					template <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">headerTemplate</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">templateContent</span>, <span class="pl-smi">$elem</span>.<span class="pl-en">html</span>() )</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">templateIcon</span>, <span class="pl-smi">$elem</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">icon</span> ).<span class="pl-c1">length</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> icon );</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">onRenderTemplate</span> ) {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">						header <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">onRenderTemplate</span>.<span class="pl-c1">apply</span>( $elem, [ index, template ] );</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// only change t if something is returned</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( header <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> header <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">							template <span class="pl-k">=</span> header;</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$elem</span>.<span class="pl-en">html</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">headerIn</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> template <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> ); <span class="pl-c">// faster than wrapInner</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">onRenderHeader</span> ) {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">onRenderHeader</span>.<span class="pl-c1">apply</span>( $elem, [ index, c, <span class="pl-smi">c</span>.<span class="pl-smi">$table</span> ] );</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">				column <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">$elem</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> ), <span class="pl-c1">10</span> );</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">elem</span>.<span class="pl-smi">column</span> <span class="pl-k">=</span> column;</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( $elem, configHeaders, <span class="pl-s"><span class="pl-pds">&#39;</span>sortInitialOrder<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortInitialOrder</span>;</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// this may get updated numerous times if there are multiple rows</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ column ] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">					count <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c">// set to -1 because clicking on the header automatically adds one</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">					order<span class="pl-k">:</span> <span class="pl-smi">ts</span>.<span class="pl-en">getOrder</span>( tmp ) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">						[ <span class="pl-c1">1</span>, <span class="pl-c1">0</span>, <span class="pl-c1">2</span> ] <span class="pl-k">:</span> <span class="pl-c">// desc, asc, unsorted</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">						[ <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, <span class="pl-c1">2</span> ],  <span class="pl-c">// asc, desc, unsorted</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">					lockedOrder <span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( $elem, configHeaders, <span class="pl-s"><span class="pl-pds">&#39;</span>lockedOrder<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> tmp <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> tmp <span class="pl-k">!==</span> <span class="pl-c1">false</span> ) {</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ column ].<span class="pl-smi">lockedOrder</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ column ].<span class="pl-smi">order</span> <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getOrder</span>( tmp ) <span class="pl-k">?</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">1</span>, <span class="pl-c1">1</span> ] <span class="pl-k">:</span> [ <span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// add cell to headerList</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">headerList</span>[ index ] <span class="pl-k">=</span> elem;</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// add to parent in case there are multiple rows</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">				$elem</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">addClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">header</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssHeader</span> )</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">					.<span class="pl-c1">parent</span>()</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">addClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">headerRow</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssHeaderRow</span> )</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// allow keyboard cursor to focus on element</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">tabIndex</span> ) {</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$elem</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tabindex<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> elem;</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">			}) );</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// cache headers per column</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$headerIndexed</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span>; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// colspan in header making a column undefined</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ indx ] ) ) {</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ indx ] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">				$temp <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>[data-column=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> indx <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// target sortable column cells, unless there are none, then use non-sortable cells</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// .last() added in jQuery 1.4; use .filter(&#39;:last&#39;) to maintain compatibility with jQuery v1.2.6</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$headerIndexed</span>[ indx ] <span class="pl-k">=</span> <span class="pl-smi">$temp</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$temp</span>.<span class="pl-en">not</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.sorter-false<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">length</span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">$temp</span>.<span class="pl-en">not</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.sorter-false<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>:last<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">$temp</span>.<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>:last<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">$</span>();</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorHeaders</span> ).<span class="pl-en">attr</span>({</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">				scope<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>col<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">				role <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>columnheader<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// enable/disable sorting</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">updateHeader</span>( c );</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Built headers:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( timer ) );</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span> );</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Use it to add a set of methods to table.config which will be available for all tables.</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// This should be done before table initialization</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">addInstanceMethods</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">methods</span> ) {</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$</span>.<span class="pl-en">extend</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">instanceMethods</span>, methods );</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		█████▄ ▄████▄ █████▄ ▄█████ ██████ █████▄ ▄█████</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██▄▄██ ██▄▄██ ██▄▄██ ▀█▄    ██▄▄   ██▄▄██ ▀█▄</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██▀▀▀  ██▀▀██ ██▀██     ▀█▄ ██▀▀   ██▀██     ▀█▄</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██     ██  ██ ██  ██ █████▀ ██████ ██  ██ █████▀</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setupParsers</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">$tbodies</span> ) {</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> rows, list, span, max, colIndex, indx, header, configHeaders,</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">				noParser, parser, extractor, time, tbody, len,</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">				table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>,</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">				tbodyIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">				debug <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// update table bodies in case we start with an empty table</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span> <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tbody:not(.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssInfoBlock</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">			tbody <span class="pl-k">=</span> <span class="pl-k">typeof</span> $tbodies <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span> <span class="pl-k">:</span> $tbodies;</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">			len <span class="pl-k">=</span> <span class="pl-smi">tbody</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( len <span class="pl-k">===</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> <span class="pl-k">?</span> <span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Warning: *Empty table!* Not building a parser cache<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">				time <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">group</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>group<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( <span class="pl-s"><span class="pl-pds">&#39;</span>Detecting parsers for each column<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">			list <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">				extractors<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">				parsers<span class="pl-k">:</span> []</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> ( tbodyIndex <span class="pl-k">&lt;</span> len ) {</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">				rows <span class="pl-k">=</span> tbody[ tbodyIndex ].<span class="pl-c1">rows</span>;</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">rows</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">					colIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">					max <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span>;</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> max; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">						header <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headerIndexed</span>[ colIndex ];</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( header <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">header</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// get column indexed table cell</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">							configHeaders <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getColumnData</span>( table, <span class="pl-smi">c</span>.<span class="pl-c1">headers</span>, colIndex );</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// get column parser/extractor</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">							extractor <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParserById</span>( <span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( header, configHeaders, <span class="pl-s"><span class="pl-pds">&#39;</span>extractor<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">							parser <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParserById</span>( <span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( header, configHeaders, <span class="pl-s"><span class="pl-pds">&#39;</span>sorter<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">							noParser <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( header, configHeaders, <span class="pl-s"><span class="pl-pds">&#39;</span>parser<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>false<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// empty cells behaviour - keeping emptyToBottom for backwards compatibility</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">empties</span>[colIndex] <span class="pl-k">=</span> (</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( header, configHeaders, <span class="pl-s"><span class="pl-pds">&#39;</span>empty<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">c</span>.<span class="pl-smi">emptyTo</span> <span class="pl-k">||</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">emptyToBottom</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span> ) ).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// text strings behaviour in numerical sorts</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">strings</span>[colIndex] <span class="pl-k">=</span> (</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( header, configHeaders, <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">c</span>.<span class="pl-smi">stringTo</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">								<span class="pl-s"><span class="pl-pds">&#39;</span>max<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( noParser ) {</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">								parser <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParserById</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>no-parser<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( <span class="pl-k">!</span>extractor ) {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">								<span class="pl-c">// For now, maybe detect someday</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">								extractor <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( <span class="pl-k">!</span>parser ) {</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">								parser <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">detectParserForColumn</span>( c, rows, <span class="pl-k">-</span><span class="pl-c1">1</span>, colIndex );</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">								debug[ <span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> colIndex <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>) <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">header</span>.<span class="pl-c1">text</span>() ] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">									parser <span class="pl-k">:</span> <span class="pl-smi">parser</span>.<span class="pl-c1">id</span>,</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">									extractor <span class="pl-k">:</span> extractor <span class="pl-k">?</span> <span class="pl-smi">extractor</span>.<span class="pl-c1">id</span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">									string <span class="pl-k">:</span> <span class="pl-smi">c</span>.<span class="pl-smi">strings</span>[ colIndex ],</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">									empty  <span class="pl-k">:</span> <span class="pl-smi">c</span>.<span class="pl-smi">empties</span>[ colIndex ]</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">								};</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">list</span>.<span class="pl-smi">parsers</span>[ colIndex ] <span class="pl-k">=</span> parser;</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">list</span>.<span class="pl-smi">extractors</span>[ colIndex ] <span class="pl-k">=</span> extractor;</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">							span <span class="pl-k">=</span> header[ <span class="pl-c1">0</span> ].<span class="pl-c1">colSpan</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( span <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">								colIndex <span class="pl-k">+=</span> span;</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">								max <span class="pl-k">+=</span> span;</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">while</span> ( span <span class="pl-k">+</span> <span class="pl-c1">1</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">									<span class="pl-c">// set colspan columns to use the same parsers &amp; extractors</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">list</span>.<span class="pl-smi">parsers</span>[ colIndex <span class="pl-k">-</span> span ] <span class="pl-k">=</span> parser;</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">list</span>.<span class="pl-smi">extractors</span>[ colIndex <span class="pl-k">-</span> span ] <span class="pl-k">=</span> extractor;</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">									span<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">						colIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">				tbodyIndex <span class="pl-k">+=</span> ( <span class="pl-smi">list</span>.<span class="pl-smi">parsers</span>.<span class="pl-c1">length</span> ) <span class="pl-k">?</span> len <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( debug ) ) {</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">table</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( debug );</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>  No parsers detected!<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Completed detecting parsers<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( time ) );</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-en">console</span>.<span class="pl-smi">groupEnd</span> ) { <span class="pl-en">console</span>.<span class="pl-en">groupEnd</span>(); }</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">parsers</span> <span class="pl-k">=</span> <span class="pl-smi">list</span>.<span class="pl-smi">parsers</span>;</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">extractors</span> <span class="pl-k">=</span> <span class="pl-smi">list</span>.<span class="pl-smi">extractors</span>;</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">addParser</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">parser</span> ) {</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indx,</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">				add <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>[ indx ].<span class="pl-c1">id</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-smi">parser</span>.<span class="pl-c1">id</span>.<span class="pl-c1">toLowerCase</span>() ) {</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">					add <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( add ) {</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>[ <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> parser;</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getParserById</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">name</span> ) {</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*jshint eqeqeq:false */</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( name <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>false<span class="pl-pds">&#39;</span></span> ) { <span class="pl-k">return</span> <span class="pl-c1">false</span>; }</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indx,</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>[ indx ].<span class="pl-c1">id</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> ( <span class="pl-smi">name</span>.<span class="pl-c1">toString</span>() ).<span class="pl-c1">toLowerCase</span>() ) {</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>[ indx ];</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">detectParserForColumn</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">rows</span>, <span class="pl-smi">rowIndex</span>, <span class="pl-smi">cellIndex</span> ) {</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> cur, $node, row,</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">				indx <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">				node <span class="pl-k">=</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">				nodeValue <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">				keepLooking <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> ( nodeValue <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> keepLooking ) {</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">				rowIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">				row <span class="pl-k">=</span> rows[ rowIndex ];</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// stop looking after 50 empty rows</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( row <span class="pl-k">&amp;&amp;</span> rowIndex <span class="pl-k">&lt;</span> <span class="pl-c1">50</span> ) {</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">row</span>.<span class="pl-c1">className</span>.<span class="pl-c1">indexOf</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">cssIgnoreRow</span> ) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">						node <span class="pl-k">=</span> rows[ rowIndex ].<span class="pl-c1">cells</span>[ cellIndex ];</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">						nodeValue <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getElementText</span>( c, node, cellIndex );</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">						$node <span class="pl-k">=</span> <span class="pl-en">$</span>( node );</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Checking if value was empty on row <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rowIndex <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, column: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">								cellIndex <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>: &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> nodeValue <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">					keepLooking <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> ( <span class="pl-k">--</span>indx <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">				cur <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">parsers</span>[ indx ];</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// ignore the default text parser because it will always be true</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( cur <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cur</span>.<span class="pl-c1">id</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cur</span>.<span class="pl-smi">is</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cur</span>.<span class="pl-en">is</span>( nodeValue, <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, node, $node ) ) {</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> cur;</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// nothing found, return the generic parser (text)</span></td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParserById</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getElementText</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">node</span>, <span class="pl-smi">cellIndex</span> ) {</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>node ) { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tmp,</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">				extract <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">textExtraction</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// node could be a jquery object</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// http://jsperf.com/jquery-vs-instanceof-jquery/2</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">				$node <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-smi">jquery</span> <span class="pl-k">?</span> node <span class="pl-k">:</span> <span class="pl-en">$</span>( node );</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> extract <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// check data-attribute first when set to &#39;basic&#39;; don&#39;t use node.innerText - it&#39;s really slow!</span></td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// http://www.kellegous.com/j/2013/02/27/innertext-vs-textcontent/</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( extract <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>basic<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> ( tmp <span class="pl-k">=</span> <span class="pl-smi">$node</span>.<span class="pl-en">attr</span>( <span class="pl-smi">c</span>.<span class="pl-smi">textAttribute</span> ) ) <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( tmp );</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( <span class="pl-smi">node</span>.<span class="pl-smi">textContent</span> <span class="pl-k">||</span> <span class="pl-smi">$node</span>.<span class="pl-c1">text</span>() );</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> extract <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( <span class="pl-en">extract</span>( $node[ <span class="pl-c1">0</span> ], <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, cellIndex ) );</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> ( tmp <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getColumnData</span>( <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, extract, cellIndex ) ) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( <span class="pl-en">tmp</span>( $node[ <span class="pl-c1">0</span> ], <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, cellIndex ) );</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// fallback</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( $node[ <span class="pl-c1">0</span> ].<span class="pl-smi">textContent</span> <span class="pl-k">||</span> <span class="pl-smi">$node</span>.<span class="pl-c1">text</span>() );</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// centralized function to extract/parse cell contents</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getParsedText</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">cell</span>, <span class="pl-smi">colIndex</span>, <span class="pl-smi">txt</span> ) {</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> txt <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">				txt <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getElementText</span>( c, cell, colIndex );</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// if no parser, make sure to return the txt</span></td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> txt,</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">				parser <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span>[ colIndex ],</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">				extractor <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">extractors</span>[ colIndex ];</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( parser ) {</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// do extract before parsing, if there is one</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( extractor <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">extractor</span>.<span class="pl-smi">format</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">					txt <span class="pl-k">=</span> <span class="pl-smi">extractor</span>.<span class="pl-en">format</span>( txt, <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, cell, colIndex );</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// allow parsing if the string is empty, previously parsing would change it to zero,</span></td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// in case the parser needs to extract data from the table cell attributes</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> <span class="pl-smi">parser</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no-parser<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// make sure txt is a string (extractor may have converted it)</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">parser</span>.<span class="pl-en">format</span>( <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> txt, <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, cell, colIndex );</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-c1">ignoreCase</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> val <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">					val <span class="pl-k">=</span> <span class="pl-smi">val</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> val;</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▄████▄ ▄████▄ ▄████▄ ██  ██ ██████</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ▀▀ ██▄▄██ ██  ▀▀ ██▄▄██ ██▄▄</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ▄▄ ██▀▀██ ██  ▄▄ ██▀▀██ ██▀▀</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▀████▀ ██  ██ ▀████▀ ██  ██ ██████</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">buildCache</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">$tbodies</span> ) {</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> cache, val, txt, rowIndex, colIndex, tbodyIndex, $tbody, $row,</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">				cols, $cells, cell, cacheTime, totalRows, rowData, prevRowData,</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">				colMax, span, cacheIndex, hasParser, max, len, index,</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">				table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>,</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">				parsers <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span>;</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// update tbody variable</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span> <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tbody:not(.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssInfoBlock</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">			$tbody <span class="pl-k">=</span> <span class="pl-k">typeof</span> $tbodies <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span> <span class="pl-k">:</span> $tbodies,</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">cache</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">totalRows</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// if no parsers found, return - it&#39;s an empty table.</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>parsers ) {</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> <span class="pl-k">?</span> <span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Warning: *Empty table!* Not building a cache<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">				cacheTime <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// processing icon</span></td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">showProcessing</span> ) {</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">isProcessing</span>( table, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( tbodyIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; tbodyIndex <span class="pl-k">&lt;</span> <span class="pl-smi">$tbody</span>.<span class="pl-c1">length</span>; tbodyIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">				colMax <span class="pl-k">=</span> []; <span class="pl-c">// column max value per tbody</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">				cache <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">					normalized<span class="pl-k">:</span> [] <span class="pl-c">// array of normalized row data; last entry contains &#39;rowData&#39; above</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// colMax: #   // added at the end</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">				totalRows <span class="pl-k">=</span> ( $tbody[ tbodyIndex ] <span class="pl-k">&amp;&amp;</span> $tbody[ tbodyIndex ].<span class="pl-c1">rows</span>.<span class="pl-c1">length</span> ) <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( rowIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; rowIndex <span class="pl-k">&lt;</span> totalRows; <span class="pl-k">++</span>rowIndex ) {</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">					rowData <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// order: original row order #</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// $row : jQuery Object[]</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">						child<span class="pl-k">:</span> [], <span class="pl-c">// child row text (filter widget)</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">						raw<span class="pl-k">:</span> []    <span class="pl-c">// original row text</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">/** Add the table data to main data array */</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">					$row <span class="pl-k">=</span> <span class="pl-en">$</span>( $tbody[ tbodyIndex ].<span class="pl-c1">rows</span>[ rowIndex ] );</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">					cols <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// if this is a child row, add it to the last row&#39;s children and continue to the next row</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// ignore child row class, if it is the first row</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">$row</span>.<span class="pl-en">hasClass</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cssChildRow</span> ) <span class="pl-k">&amp;&amp;</span> rowIndex <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">						len <span class="pl-k">=</span> <span class="pl-smi">cache</span>.<span class="pl-smi">normalized</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">						prevRowData <span class="pl-k">=</span> <span class="pl-smi">cache</span>.<span class="pl-smi">normalized</span>[ len ][ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ];</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">prevRowData</span>.<span class="pl-smi">$row</span> <span class="pl-k">=</span> <span class="pl-smi">prevRowData</span>.<span class="pl-smi">$row</span>.<span class="pl-c1">add</span>( $row );</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// add &#39;hasChild&#39; class name to parent row</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">$row</span>.<span class="pl-en">prev</span>().<span class="pl-en">hasClass</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cssChildRow</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">$row</span>.<span class="pl-en">prev</span>().<span class="pl-en">addClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">cssHasChild</span> );</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// save child row content (un-parsed!)</span></td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">						$cells <span class="pl-k">=</span> <span class="pl-smi">$row</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>th, td<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">						len <span class="pl-k">=</span> <span class="pl-smi">prevRowData</span>.<span class="pl-smi">child</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">prevRowData</span>.<span class="pl-smi">child</span>[ len ] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// child row content does not account for colspans/rowspans; so indexing may be off</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">						cacheIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">						max <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span>;</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span> ( colIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; colIndex <span class="pl-k">&lt;</span> max; colIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">							cell <span class="pl-k">=</span> $cells[ colIndex ];</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( cell ) {</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">prevRowData</span>.<span class="pl-smi">child</span>[ len ][ colIndex ] <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParsedText</span>( c, cell, colIndex );</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">								span <span class="pl-k">=</span> $cells[ colIndex ].<span class="pl-c1">colSpan</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span> ( span <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">									cacheIndex <span class="pl-k">+=</span> span;</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">									max <span class="pl-k">+=</span> span;</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">							cacheIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// go to the next for loop</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">rowData</span>.<span class="pl-smi">$row</span> <span class="pl-k">=</span> $row;</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">rowData</span>.<span class="pl-smi">order</span> <span class="pl-k">=</span> rowIndex; <span class="pl-c">// add original row position to rowCache</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">					cacheIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">					max <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span>;</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( colIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; colIndex <span class="pl-k">&lt;</span> max; <span class="pl-k">++</span>colIndex ) {</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">						cell <span class="pl-k">=</span> $row[ <span class="pl-c1">0</span> ].<span class="pl-c1">cells</span>[ colIndex ];</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( cell <span class="pl-k">&amp;&amp;</span> cacheIndex <span class="pl-k">&lt;</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ) {</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">							hasParser <span class="pl-k">=</span> <span class="pl-k">typeof</span> parsers[ cacheIndex ] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( <span class="pl-k">!</span>hasParser <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">								<span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>No parser found for row: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> rowIndex <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>, column: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> colIndex <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">									<span class="pl-s"><span class="pl-pds">&#39;</span>; cell containing: &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-en">$</span>(cell).<span class="pl-c1">text</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;; does it have a header?<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">							val <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getElementText</span>( c, cell, cacheIndex );</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">rowData</span>.<span class="pl-smi">raw</span>[ cacheIndex ] <span class="pl-k">=</span> val; <span class="pl-c">// save original row text</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// save raw column text even if there is no parser set</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">							txt <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParsedText</span>( c, cell, cacheIndex, val );</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">							cols[ cacheIndex ] <span class="pl-k">=</span> txt;</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( hasParser <span class="pl-k">&amp;&amp;</span> ( parsers[ cacheIndex ].<span class="pl-c1">type</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">								<span class="pl-c">// determine column max value (ignore sign)</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">								colMax[ cacheIndex ] <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>( <span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>( txt ) <span class="pl-k">||</span> <span class="pl-c1">0</span>, colMax[ cacheIndex ] <span class="pl-k">||</span> <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// allow colSpan in tbody</span></td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">							span <span class="pl-k">=</span> <span class="pl-smi">cell</span>.<span class="pl-c1">colSpan</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( span <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">								index <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">while</span> ( index <span class="pl-k">&lt;=</span> span ) {</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">									<span class="pl-c">// duplicate text (or not) to spanned columns</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">									<span class="pl-c">// instead of setting duplicate span to empty string, use textExtraction to try to get a value</span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">									<span class="pl-c">// see http://stackoverflow.com/q/36449711/145346</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">									txt <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">duplicateSpan</span> <span class="pl-k">||</span> index <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">										val <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">typeof</span> <span class="pl-smi">c</span>.<span class="pl-smi">textExtraction</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">											<span class="pl-smi">ts</span>.<span class="pl-en">getElementText</span>( c, cell, cacheIndex <span class="pl-k">+</span> index ) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">											<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">									<span class="pl-smi">rowData</span>.<span class="pl-smi">raw</span>[ cacheIndex <span class="pl-k">+</span> index ] <span class="pl-k">=</span> txt;</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">									cols[ cacheIndex <span class="pl-k">+</span> index ] <span class="pl-k">=</span> txt;</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">									index<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">								cacheIndex <span class="pl-k">+=</span> span;</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">								max <span class="pl-k">+=</span> span;</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">						cacheIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// ensure rowData is always in the same location (after the last column)</span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">					cols[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ] <span class="pl-k">=</span> rowData;</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">cache</span>.<span class="pl-smi">normalized</span>[ <span class="pl-smi">cache</span>.<span class="pl-smi">normalized</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> cols;</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">cache</span>.<span class="pl-smi">colMax</span> <span class="pl-k">=</span> colMax;</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// total up rows, not including child rows</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">totalRows</span> <span class="pl-k">+=</span> <span class="pl-smi">cache</span>.<span class="pl-smi">normalized</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">showProcessing</span> ) {</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">isProcessing</span>( table ); <span class="pl-c">// remove processing icon</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">min</span>( <span class="pl-c1">5</span>, <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ <span class="pl-c1">0</span> ].<span class="pl-smi">normalized</span>.<span class="pl-c1">length</span> );</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">group</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>group<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( <span class="pl-s"><span class="pl-pds">&#39;</span>Building cache for <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">totalRows</span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span> rows (showing <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> len <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> rows in log)<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( cacheTime ) );</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( colIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; colIndex <span class="pl-k">&lt;</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span>; colIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( cacheIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; cacheIndex <span class="pl-k">&lt;</span> len; cacheIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-k">!</span>val[ <span class="pl-s"><span class="pl-pds">&#39;</span>row: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> cacheIndex ] ) {</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">							val[ <span class="pl-s"><span class="pl-pds">&#39;</span>row: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> cacheIndex ] <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">						val[ <span class="pl-s"><span class="pl-pds">&#39;</span>row: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> cacheIndex ][ <span class="pl-smi">c</span>.<span class="pl-smi">$headerIndexed</span>[ colIndex ].<span class="pl-c1">text</span>() ] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ <span class="pl-c1">0</span> ].<span class="pl-smi">normalized</span>[ cacheIndex ][ colIndex ];</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">table</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( val );</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-en">console</span>.<span class="pl-smi">groupEnd</span> ) { <span class="pl-en">console</span>.<span class="pl-en">groupEnd</span>(); }</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">$</span>.<span class="pl-en">isFunction</span>( callback ) ) {</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>( table );</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getColumnText</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">column</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">rowFilter</span> ) {</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tbodyIndex, rowIndex, cache, row, tbodyLen, rowLen, raw, parsed, $cell, result,</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">				hasCallback <span class="pl-k">=</span> <span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">				allColumns <span class="pl-k">=</span> column <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>all<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">				data <span class="pl-k">=</span> { raw <span class="pl-k">:</span> [], parsed<span class="pl-k">:</span> [], $cell<span class="pl-k">:</span> [] },</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>;</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( c ) ) {</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>No cache found - aborting getColumnText function!<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">				tbodyLen <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( tbodyIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; tbodyIndex <span class="pl-k">&lt;</span> tbodyLen; tbodyIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">					cache <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ].<span class="pl-smi">normalized</span>;</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">					rowLen <span class="pl-k">=</span> <span class="pl-smi">cache</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( rowIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; rowIndex <span class="pl-k">&lt;</span> rowLen; rowIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">						row <span class="pl-k">=</span> cache[ rowIndex ];</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( rowFilter <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>row[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">$row</span>.<span class="pl-en">is</span>( rowFilter ) ) {</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">						result <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">						parsed <span class="pl-k">=</span> ( allColumns ) <span class="pl-k">?</span> <span class="pl-smi">row</span>.<span class="pl-c1">slice</span>( <span class="pl-c1">0</span>, <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ) <span class="pl-k">:</span> row[ column ];</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">						row <span class="pl-k">=</span> row[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ];</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">						raw <span class="pl-k">=</span> ( allColumns ) <span class="pl-k">?</span> <span class="pl-smi">row</span>.<span class="pl-smi">raw</span> <span class="pl-k">:</span> <span class="pl-smi">row</span>.<span class="pl-smi">raw</span>[ column ];</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">						$cell <span class="pl-k">=</span> ( allColumns ) <span class="pl-k">?</span> <span class="pl-smi">row</span>.<span class="pl-smi">$row</span>.<span class="pl-en">children</span>() <span class="pl-k">:</span> <span class="pl-smi">row</span>.<span class="pl-smi">$row</span>.<span class="pl-en">children</span>().<span class="pl-en">eq</span>( column );</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( hasCallback ) {</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">							result <span class="pl-k">=</span> <span class="pl-en">callback</span>({</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">								tbodyIndex <span class="pl-k">:</span> tbodyIndex,</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">								rowIndex <span class="pl-k">:</span> rowIndex,</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">								parsed <span class="pl-k">:</span> parsed,</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">								raw <span class="pl-k">:</span> raw,</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">								$row <span class="pl-k">:</span> <span class="pl-smi">row</span>.<span class="pl-smi">$row</span>,</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">								$cell <span class="pl-k">:</span> $cell</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">							});</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( result <span class="pl-k">!==</span> <span class="pl-c1">false</span> ) {</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">data</span>.<span class="pl-smi">parsed</span>[ <span class="pl-smi">data</span>.<span class="pl-smi">parsed</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> parsed;</td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">data</span>.<span class="pl-smi">raw</span>[ <span class="pl-smi">data</span>.<span class="pl-smi">raw</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> raw;</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">data</span>.<span class="pl-smi">$cell</span>[ <span class="pl-smi">data</span>.<span class="pl-smi">$cell</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> $cell;</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// return everything</span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> data;</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ██ █████▄ █████▄ ▄████▄ ██████ ██████</span></td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ██ ██▄▄██ ██  ██ ██▄▄██   ██   ██▄▄</span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ██ ██▀▀▀  ██  ██ ██▀▀██   ██   ██▀▀</span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▀████▀ ██     █████▀ ██  ██   ██   ██████</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setHeadersCss</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> $sorted, indx, column,</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">				list <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>,</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">list</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">				none <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortNone</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssNone</span>,</td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">				css <span class="pl-k">=</span> [ <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortAsc</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssAsc</span>, <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortDesc</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssDesc</span> ],</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">				cssIcon <span class="pl-k">=</span> [ <span class="pl-smi">c</span>.<span class="pl-smi">cssIconAsc</span>, <span class="pl-smi">c</span>.<span class="pl-smi">cssIconDesc</span>, <span class="pl-smi">c</span>.<span class="pl-smi">cssIconNone</span> ],</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">				aria <span class="pl-k">=</span> [ <span class="pl-s"><span class="pl-pds">&#39;</span>ascending<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>descending<span class="pl-pds">&#39;</span></span> ],</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// find the footer</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">				$headers <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">					.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tfoot tr<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>td, th<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">					.<span class="pl-c1">add</span>( <span class="pl-en">$</span>( <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_extra_headers<span class="pl-pds">&#39;</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">					.<span class="pl-en">removeClass</span>( <span class="pl-smi">css</span>.<span class="pl-c1">join</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// remove all header information</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$headers</span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">removeClass</span>( <span class="pl-smi">css</span>.<span class="pl-c1">join</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">addClass</span>( none )</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-sort<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">icon</span> )</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">removeClass</span>( <span class="pl-smi">cssIcon</span>.<span class="pl-c1">join</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">addClass</span>( cssIcon[ <span class="pl-c1">2</span> ] );</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// direction = 2 means reset!</span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( list[ indx ][ <span class="pl-c1">1</span> ] <span class="pl-k">!==</span> <span class="pl-c1">2</span> ) {</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// multicolumn sorting updating - see #1005</span></td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// .not(function(){}) needs jQuery 1.4</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// filter(function(i, el){}) &lt;- el is undefined in jQuery v1.2.6</span></td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">					$sorted <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-en">filter</span>( <span class="pl-k">function</span>( <span class="pl-smi">i</span> ) {</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// only include headers that are in the sortList (this includes colspans)</span></td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> include <span class="pl-k">=</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">							$el <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-en">eq</span>( i ),</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">							col <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">$el</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> ), <span class="pl-c1">10</span> ),</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">							end <span class="pl-k">=</span> col <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>[ i ].<span class="pl-c1">colSpan</span>;</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span> ( ; col <span class="pl-k">&lt;</span> end; col<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">							include <span class="pl-k">=</span> include <span class="pl-k">?</span> include <span class="pl-k">||</span> <span class="pl-smi">ts</span>.<span class="pl-en">isValueInArray</span>( col, <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> ) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> include;</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// choose the :last in case there are nested columns</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">					$sorted <span class="pl-k">=</span> $sorted</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">not</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.sorter-false<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>[data-column=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> list[ indx ][ <span class="pl-c1">0</span> ] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( len <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>:last<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">$sorted</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span> ( column <span class="pl-k">=</span> <span class="pl-c1">0</span>; column <span class="pl-k">&lt;</span> <span class="pl-smi">$sorted</span>.<span class="pl-c1">length</span>; column<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( <span class="pl-k">!</span>$sorted[ column ].<span class="pl-smi">sortDisabled</span> ) {</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">								$sorted</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">									.<span class="pl-en">eq</span>( column )</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">									.<span class="pl-en">removeClass</span>( none )</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">									.<span class="pl-en">addClass</span>( css[ list[ indx ][ <span class="pl-c1">1</span> ] ] )</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">									.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-sort<span class="pl-pds">&#39;</span></span>, aria[ list[ indx ][ <span class="pl-c1">1</span> ] ] )</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">									.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">icon</span> )</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">									.<span class="pl-en">removeClass</span>( cssIcon[ <span class="pl-c1">2</span> ] )</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">									.<span class="pl-en">addClass</span>( cssIcon[ list[ indx ][ <span class="pl-c1">1</span> ] ] );</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// add sorted class to footer &amp; extra headers, if they exist</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-smi">$headers</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">							$headers</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">								.<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>[data-column=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> list[ indx ][ <span class="pl-c1">0</span> ] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">								.<span class="pl-en">removeClass</span>( none )</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">								.<span class="pl-en">addClass</span>( css[ list[ indx ][ <span class="pl-c1">1</span> ] ] );</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// add verbose aria labels</span></td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">			len <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">setColumnAriaLabel</span>( c, <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-en">eq</span>( indx ) );</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// nextSort (optional), lets you disable next sort text</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setColumnAriaLabel</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">$header</span>, <span class="pl-smi">nextSort</span> ) {</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">$header</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> column <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">$header</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> ), <span class="pl-c1">10</span> ),</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">					tmp <span class="pl-k">=</span> <span class="pl-smi">$header</span>.<span class="pl-en">hasClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortAsc</span> ) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&#39;</span>sortAsc<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">$header</span>.<span class="pl-en">hasClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortDesc</span> ) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sortDesc<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sortNone<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">					txt <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( <span class="pl-smi">$header</span>.<span class="pl-c1">text</span>() ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-c1">language</span>[ tmp ];</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">$header</span>.<span class="pl-en">hasClass</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sorter-false<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span> nextSort <span class="pl-k">===</span> <span class="pl-c1">false</span> ) {</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">					txt <span class="pl-k">+=</span> <span class="pl-smi">ts</span>.<span class="pl-c1">language</span>.<span class="pl-smi">sortDisabled</span>;</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">					nextSort <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ column ].<span class="pl-smi">order</span>[ ( <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ column ].<span class="pl-smi">count</span> <span class="pl-k">+</span> <span class="pl-c1">1</span> ) <span class="pl-k">%</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortReset</span> <span class="pl-k">?</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-c1">2</span> ) ];</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// if nextSort</span></td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">					txt <span class="pl-k">+=</span> <span class="pl-smi">ts</span>.<span class="pl-c1">language</span>[ nextSort <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>nextAsc<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> nextSort <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>nextDesc<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>nextNone<span class="pl-pds">&#39;</span></span> ];</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$header</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-label<span class="pl-pds">&#39;</span></span>, txt );</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateHeader</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> index, isDisabled, $header, col,</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">				table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>,</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> len; index<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">				$header <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-en">eq</span>( index );</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">				col <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getColumnData</span>( table, <span class="pl-smi">c</span>.<span class="pl-c1">headers</span>, index, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// add &#39;sorter-false&#39; class if &#39;parser-false&#39; is set</span></td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">				isDisabled <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( $header, col, <span class="pl-s"><span class="pl-pds">&#39;</span>sorter<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>false<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( $header, col, <span class="pl-s"><span class="pl-pds">&#39;</span>parser<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>false<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">setColumnSort</span>( c, $header, isDisabled );</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">setColumnSort</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">$header</span>, <span class="pl-smi">isDisabled</span> ) {</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> id <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">			$header[ <span class="pl-c1">0</span> ].<span class="pl-smi">sortDisabled</span> <span class="pl-k">=</span> isDisabled;</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">			$header[ isDisabled <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>addClass<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>removeClass<span class="pl-pds">&#39;</span></span> ]( <span class="pl-s"><span class="pl-pds">&#39;</span>sorter-false<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-disabled<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> isDisabled );</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// disable tab index on disabled cells</span></td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">tabIndex</span> ) {</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( isDisabled ) {</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$header</span>.<span class="pl-en">removeAttr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tabindex<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$header</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tabindex<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// aria-controls - requires table ID</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( id ) {</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( isDisabled ) {</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$header</span>.<span class="pl-en">removeAttr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-controls<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$header</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-controls<span class="pl-pds">&#39;</span></span>, id );</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateHeaderSortCount</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">list</span> ) {</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> col, dir, group, indx, primary, temp, val, order,</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">				sortList <span class="pl-k">=</span> list <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>,</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">sortList</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> sortList[ indx ];</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// ensure all sortList values are numeric - fixes #127</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">				col <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( val[ <span class="pl-c1">0</span> ], <span class="pl-c1">10</span> );</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// prevents error if sorton array is wrong</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( col <span class="pl-k">&lt;</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ) {</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// set order if not already defined - due to colspan header without associated header cell</span></td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// adding this check prevents a javascript error</span></td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">order</span> ) {</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">						order <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">order</span> <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getOrder</span>( <span class="pl-smi">c</span>.<span class="pl-smi">sortInitialOrder</span> ) <span class="pl-k">?</span> [ <span class="pl-c1">1</span>, <span class="pl-c1">0</span>, <span class="pl-c1">2</span> ] <span class="pl-k">:</span> [ <span class="pl-c1">0</span>, <span class="pl-c1">1</span>, <span class="pl-c1">2</span> ];</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">					order <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">order</span>;</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">					dir <span class="pl-k">=</span> ( <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> val[ <span class="pl-c1">1</span> ] ).<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(1<span class="pl-k">|</span>d<span class="pl-k">|</span>s<span class="pl-k">|</span>o<span class="pl-k">|</span>n)<span class="pl-pds">/</span></span> );</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">					dir <span class="pl-k">=</span> dir <span class="pl-k">?</span> dir[ <span class="pl-c1">0</span> ] <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// 0/(a)sc (default), 1/(d)esc, (s)ame, (o)pposite, (n)ext</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">switch</span> ( dir ) {</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>1<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// descending</span></td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">							dir <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-c">// same direction (as primary column)</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// if primary sort is set to &#39;s&#39;, make it ascending</span></td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">							dir <span class="pl-k">=</span> primary <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>o<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">							temp <span class="pl-k">=</span> order[ ( primary <span class="pl-k">||</span> <span class="pl-c1">0</span> ) <span class="pl-k">%</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortReset</span> <span class="pl-k">?</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-c1">2</span> ) ];</td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// opposite of primary column; but resets if primary resets</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">							dir <span class="pl-k">=</span> temp <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> temp <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">							dir <span class="pl-k">=</span> order[ ( <span class="pl-k">++</span><span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> ) <span class="pl-k">%</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortReset</span> <span class="pl-k">?</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-c1">2</span> ) ];</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">default</span> <span class="pl-k">:</span> <span class="pl-c">// ascending</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">							dir <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">					primary <span class="pl-k">=</span> indx <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> dir <span class="pl-k">:</span> primary;</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">					group <span class="pl-k">=</span> [ col, <span class="pl-c1">parseInt</span>( dir, <span class="pl-c1">10</span> ) <span class="pl-k">||</span> <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> group;</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">					dir <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( group[ <span class="pl-c1">1</span> ], order ); <span class="pl-c">// fixes issue #167</span></td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> <span class="pl-k">=</span> dir <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> dir <span class="pl-k">:</span> group[ <span class="pl-c1">1</span> ] <span class="pl-k">%</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortReset</span> <span class="pl-k">?</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-c1">2</span> );</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateAll</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>;</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">refreshWidgets</span>( table, <span class="pl-c1">true</span>, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">buildHeaders</span>( c );</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">bindEvents</span>( table, <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">bindMethods</span>( c );</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">commonUpdate</span>( c, resort, callback );</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">update</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>;</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// update sorting (if enabled/disabled)</span></td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">updateHeader</span>( c );</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">commonUpdate</span>( c, resort, callback );</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// simple header update - see #989</span></td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateHeaders</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">buildHeaders</span>( c );</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">bindEvents</span>( <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">resortComplete</span>( c, callback );</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateCell</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">cell</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cache</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// empty table, do an update instead - fixes #1099</span></td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">updateHeader</span>( c );</td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">commonUpdate</span>( c, resort, callback );</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorRemove</span> ).<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// get position from the dom</span></td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tmp, indx, row, icell, cache, len,</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">				$tbodies <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>,</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">				$cell <span class="pl-k">=</span> <span class="pl-en">$</span>( cell ),</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// update cache - format: function( s, table, cell, cellIndex )</span></td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// no closest in jQuery v1.2.6</span></td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">				tbodyIndex <span class="pl-k">=</span> $tbodies</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">					.<span class="pl-c1">index</span>( <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">closest</span> <span class="pl-k">?</span> <span class="pl-smi">$cell</span>.<span class="pl-en">closest</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tbody<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span> <span class="pl-smi">$cell</span>.<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tbody<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>:first<span class="pl-pds">&#39;</span></span> ) ),</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">				tbcache <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ],</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">				$row <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">closest</span> <span class="pl-k">?</span> <span class="pl-smi">$cell</span>.<span class="pl-en">closest</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span> <span class="pl-smi">$cell</span>.<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>:first<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">			cell <span class="pl-k">=</span> $cell[ <span class="pl-c1">0</span> ]; <span class="pl-c">// in case cell is a jQuery object</span></td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// tbody may not exist if update is initialized while tbody is removed for processing</span></td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> tbodyIndex <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">				row <span class="pl-k">=</span> <span class="pl-smi">$tbodies</span>.<span class="pl-en">eq</span>( tbodyIndex ).<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">index</span>( $row );</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">				cache <span class="pl-k">=</span> <span class="pl-smi">tbcache</span>.<span class="pl-smi">normalized</span>[ row ];</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> $row[ <span class="pl-c1">0</span> ].<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( len <span class="pl-k">!==</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ) {</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// colspan in here somewhere!</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">					icell <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">					tmp <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-k">!</span>tmp <span class="pl-k">&amp;&amp;</span> $row[ <span class="pl-c1">0</span> ].<span class="pl-c1">cells</span>[ indx ] <span class="pl-k">!==</span> cell ) {</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">							icell <span class="pl-k">+=</span> $row[ <span class="pl-c1">0</span> ].<span class="pl-c1">cells</span>[ indx ].<span class="pl-c1">colSpan</span>;</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">							tmp <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">					icell <span class="pl-k">=</span> <span class="pl-smi">$cell</span>.<span class="pl-c1">index</span>();</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getElementText</span>( c, cell, icell ); <span class="pl-c">// raw</span></td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">				cache[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">raw</span>[ icell ] <span class="pl-k">=</span> tmp;</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParsedText</span>( c, cell, icell, tmp );</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">				cache[ icell ] <span class="pl-k">=</span> tmp; <span class="pl-c">// parsed</span></td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">				cache[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">$row</span> <span class="pl-k">=</span> $row;</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( ( <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span>[ icell ].<span class="pl-c1">type</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// update column max value (ignore sign)</span></td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">tbcache</span>.<span class="pl-smi">colMax</span>[ icell ] <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>( <span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>( tmp ) <span class="pl-k">||</span> <span class="pl-c1">0</span>, <span class="pl-smi">tbcache</span>.<span class="pl-smi">colMax</span>[ icell ] <span class="pl-k">||</span> <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">				tmp <span class="pl-k">=</span> resort <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> resort <span class="pl-k">:</span> <span class="pl-smi">c</span>.<span class="pl-smi">resort</span>;</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( tmp <span class="pl-k">!==</span> <span class="pl-c1">false</span> ) {</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// widgets will be reapplied</span></td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">checkResort</span>( c, tmp, callback );</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// don&#39;t reapply widgets is resort is false, just in case it causes</span></td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// problems with element focus</span></td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">resortComplete</span>( c, callback );</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>.<span class="pl-c1">error</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateCell aborted, tbody missing or not within the indicated table<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">addRows</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">$row</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> txt, val, tbodyIndex, rowIndex, rows, cellIndex, len, order,</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">				cacheIndex, rowData, cells, cell, span,</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// allow passing a row string if only one non-info tbody exists in the table</span></td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">				valid <span class="pl-k">=</span> <span class="pl-k">typeof</span> $row <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span><span class="pl-sr"> <span class="pl-pds">/</span>&lt;tr<span class="pl-pds">/</span></span>.<span class="pl-c1">test</span>( $row <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">				table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>;</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( valid ) {</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">				$row <span class="pl-k">=</span> <span class="pl-en">$</span>( $row );</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-en">append</span>( $row );</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">!</span>$row <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// row is a jQuery object?</span></td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">!</span>( $row <span class="pl-k">instanceof</span> jQuery ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// row contained in the table?</span></td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">				( <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">closest</span> <span class="pl-k">?</span> <span class="pl-smi">$row</span>.<span class="pl-en">closest</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span> )[ <span class="pl-c1">0</span> ] <span class="pl-k">:</span> <span class="pl-smi">$row</span>.<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>table<span class="pl-pds">&#39;</span></span> )[ <span class="pl-c1">0</span> ] ) <span class="pl-k">!==</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>.<span class="pl-c1">error</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>addRows method requires (1) a jQuery selector reference to rows that have already <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">						<span class="pl-s"><span class="pl-pds">&#39;</span>been added to the table, or (2) row HTML string to be added to a table with only one tbody<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cache</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// empty table, do an update instead - fixes #450</span></td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">updateHeader</span>( c );</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">commonUpdate</span>( c, resort, callback );</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">				rows <span class="pl-k">=</span> <span class="pl-smi">$row</span>.<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>row<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">				tbodyIndex <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-c1">index</span>( <span class="pl-smi">$row</span>.<span class="pl-en">parents</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tbody<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>:first<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// fixes adding rows to an empty table - see issue #179</span></td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span>( <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span>.<span class="pl-c1">length</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">setupParsers</span>( c );</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// add each row</span></td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( rowIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; rowIndex <span class="pl-k">&lt;</span> rows; rowIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">					cacheIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">					len <span class="pl-k">=</span> $row[ rowIndex ].<span class="pl-c1">cells</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">					order <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ].<span class="pl-smi">normalized</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">					cells <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">					rowData <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">						child <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">						raw <span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">						$row <span class="pl-k">:</span> <span class="pl-smi">$row</span>.<span class="pl-en">eq</span>( rowIndex ),</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">						order <span class="pl-k">:</span> order</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// add each cell</span></td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( cellIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; cellIndex <span class="pl-k">&lt;</span> len; cellIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">						cell <span class="pl-k">=</span> $row[ rowIndex ].<span class="pl-c1">cells</span>[ cellIndex ];</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">						txt <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getElementText</span>( c, cell, cacheIndex );</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">rowData</span>.<span class="pl-smi">raw</span>[ cacheIndex ] <span class="pl-k">=</span> txt;</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">						val <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getParsedText</span>( c, cell, cacheIndex, txt );</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">						cells[ cacheIndex ] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( ( <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span>[ cacheIndex ].<span class="pl-c1">type</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// update column max value (ignore sign)</span></td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ].<span class="pl-smi">colMax</span>[ cacheIndex ] <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">								<span class="pl-c1">Math</span>.<span class="pl-c1">max</span>( <span class="pl-c1">Math</span>.<span class="pl-c1">abs</span>( val ) <span class="pl-k">||</span> <span class="pl-c1">0</span>, <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ].<span class="pl-smi">colMax</span>[ cacheIndex ] <span class="pl-k">||</span> <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">						span <span class="pl-k">=</span> <span class="pl-smi">cell</span>.<span class="pl-c1">colSpan</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( span <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">							cacheIndex <span class="pl-k">+=</span> span;</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">						cacheIndex<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// add the row data to the end</span></td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">					cells[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ] <span class="pl-k">=</span> rowData;</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// update cache</span></td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ].<span class="pl-smi">normalized</span>[ order ] <span class="pl-k">=</span> cells;</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// resort using current settings</span></td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">checkResort</span>( c, resort, callback );</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">updateCache</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">$tbodies</span> ) {</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// rebuild parsers</span></td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>( <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span>.<span class="pl-c1">length</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">setupParsers</span>( c, $tbodies );</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// rebuild the cache map</span></td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">buildCache</span>( c, callback, $tbodies );</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// init flag (true) used by pager plugin to prevent widget application</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// renamed from appendToTable</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">appendCache</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">init</span> ) {</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> parsed, totalRows, $tbody, $curTbody, rowIndex, tbodyIndex, appendTime,</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">				table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>,</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">				wo <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">widgetOptions</span>,</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">				$tbodies <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>,</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">				rows <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">				cache <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>;</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// empty table - fixes #206/#346</span></td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( cache ) ) {</td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// run pager appender in case the table was just emptied</span></td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">c</span>.<span class="pl-smi">appender</span> <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-en">appender</span>( table, rows ) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateComplete<span class="pl-pds">&#39;</span></span>, table ) <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>; <span class="pl-c">// Fixes #532</span></td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">				appendTime <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>();</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( tbodyIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; tbodyIndex <span class="pl-k">&lt;</span> <span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span>; tbodyIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">				$tbody <span class="pl-k">=</span> <span class="pl-smi">$tbodies</span>.<span class="pl-en">eq</span>( tbodyIndex );</td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">$tbody</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// detach tbody for manipulation</span></td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">					$curTbody <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">processTbody</span>( table, $tbody, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">					parsed <span class="pl-k">=</span> cache[ tbodyIndex ].<span class="pl-smi">normalized</span>;</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">					totalRows <span class="pl-k">=</span> <span class="pl-smi">parsed</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( rowIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; rowIndex <span class="pl-k">&lt;</span> totalRows; rowIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">						rows[<span class="pl-smi">rows</span>.<span class="pl-c1">length</span>] <span class="pl-k">=</span> parsed[ rowIndex ][ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">$row</span>;</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// removeRows used by the pager plugin; don&#39;t render if using ajax - fixes #411</span></td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">appender</span> <span class="pl-k">||</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">pager</span> <span class="pl-k">&amp;&amp;</span> ( <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">pager</span>.<span class="pl-smi">removeRows</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">wo</span>.<span class="pl-smi">pager_removeRows</span> ) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">pager</span>.<span class="pl-smi">ajax</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">$curTbody</span>.<span class="pl-en">append</span>( parsed[ rowIndex ][ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">$row</span> );</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// restore tbody</span></td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">processTbody</span>( table, $curTbody, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">appender</span> ) {</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-en">appender</span>( table, rows );</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Rebuilt table<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( appendTime ) );</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// apply table widgets; but not before ajax completes</span></td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>init <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">appender</span> ) {</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( table );</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> ) {</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateComplete<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">commonUpdate</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// remove rows/elements before update</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorRemove</span> ).<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// rebuild parsers</span></td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">setupParsers</span>( c );</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// rebuild the cache map</span></td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">buildCache</span>( c );</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">checkResort</span>( c, resort, callback );</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▄█████ ▄████▄ █████▄ ██████ ██ █████▄ ▄████▄</span></td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▀█▄    ██  ██ ██▄▄██   ██   ██ ██  ██ ██ ▄▄▄</span></td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		   ▀█▄ ██  ██ ██▀██    ██   ██ ██  ██ ██ ▀██</span></td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		█████▀ ▀████▀ ██  ██   ██   ██ ██  ██ ▀████▀</span></td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">initSort</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">cell</span>, <span class="pl-c1">event</span> ) {</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> ) {</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// let any updates complete before initializing a sort</span></td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">setTimeout</span>( <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">initSort</span>( c, cell, <span class="pl-c1">event</span> );</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-c1">50</span> );</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> arry, indx, headerIndx, dir, temp, tmp, $header,</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">				notMultiSort <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">event</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortMultiSortKey</span> ],</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">				table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>,</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// get current column index</span></td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">				col <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( <span class="pl-en">$</span>( cell ).<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> ), <span class="pl-c1">10</span> ),</td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">				order <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">order</span>;</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Only call sortStart if sorting is enabled</span></td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortStart<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// get current column sort order</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> <span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">event</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortResetKey</span> ] <span class="pl-k">?</span> <span class="pl-c1">2</span> <span class="pl-k">:</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> <span class="pl-k">+</span> <span class="pl-c1">1</span> ) <span class="pl-k">%</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortReset</span> <span class="pl-k">?</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-c1">2</span> );</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// reset all sorts on non-current column - issue #30</span></td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortRestart</span> ) {</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( headerIndx <span class="pl-k">=</span> <span class="pl-c1">0</span>; headerIndx <span class="pl-k">&lt;</span> len; headerIndx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">					$header <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span>.<span class="pl-en">eq</span>( headerIndx );</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">					tmp <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">$header</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> ), <span class="pl-c1">10</span> );</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// only reset counts on columns that weren&#39;t just clicked on and if not included in a multisort</span></td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( col <span class="pl-k">!==</span> tmp <span class="pl-k">&amp;&amp;</span> ( notMultiSort <span class="pl-k">||</span> <span class="pl-smi">$header</span>.<span class="pl-en">hasClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortNone</span> ) ) ) {</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ tmp ].<span class="pl-smi">count</span> <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// user only wants to sort on one column</span></td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( notMultiSort ) {</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// flush the sort list</span></td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">last</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortForce</span> <span class="pl-k">!==</span> <span class="pl-c1">null</span> ) {</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">					arry <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortForce</span>;</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> <span class="pl-smi">arry</span>.<span class="pl-c1">length</span>; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( arry[ indx ][ <span class="pl-c1">0</span> ] <span class="pl-k">!==</span> col ) {</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> arry[ indx ];</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// add column to sort list</span></td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">				dir <span class="pl-k">=</span> order[ <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> ];</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( dir <span class="pl-k">&lt;</span> <span class="pl-c1">2</span> ) {</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> [ col, dir ];</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// add other columns if header spans across multiple</span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">cell</span>.<span class="pl-c1">colSpan</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">1</span>; indx <span class="pl-k">&lt;</span> <span class="pl-smi">cell</span>.<span class="pl-c1">colSpan</span>; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> [ col <span class="pl-k">+</span> indx, dir ];</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// update count on columns in colSpan</span></td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col <span class="pl-k">+</span> indx ].<span class="pl-smi">count</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( dir, order );</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// multi column sorting</span></td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// get rid of the sortAppend before adding more - fixes issue #115 &amp; #523</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>( [], <span class="pl-smi">c</span>.<span class="pl-smi">last</span>.<span class="pl-smi">sortList</span> );</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// the user has clicked on an already sorted column</span></td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-en">isValueInArray</span>( col, <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> ) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// reverse the sorting direction</span></td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span>; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">						tmp <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ indx ];</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( tmp[ <span class="pl-c1">0</span> ] <span class="pl-k">===</span> col ) {</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// order.count seems to be incorrect when compared to cell.count</span></td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">							tmp[ <span class="pl-c1">1</span> ] <span class="pl-k">=</span> order[ <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> ];</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( tmp[<span class="pl-c1">1</span>] <span class="pl-k">===</span> <span class="pl-c1">2</span> ) {</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">splice</span>( indx, <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// add column to sort list array</span></td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">					dir <span class="pl-k">=</span> order[ <span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col ].<span class="pl-smi">count</span> ];</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( dir <span class="pl-k">&lt;</span> <span class="pl-c1">2</span> ) {</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> [ col, dir ];</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// add other columns if header spans across multiple</span></td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-smi">cell</span>.<span class="pl-c1">colSpan</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">1</span>; indx <span class="pl-k">&lt;</span> <span class="pl-smi">cell</span>.<span class="pl-c1">colSpan</span>; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> [ col <span class="pl-k">+</span> indx, dir ];</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">								<span class="pl-c">// update count on columns in colSpan</span></td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">c</span>.<span class="pl-smi">sortVars</span>[ col <span class="pl-k">+</span> indx ].<span class="pl-smi">count</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( dir, order );</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// save sort before applying sortAppend</span></td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">last</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>( [], <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> );</td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortAppend</span> ) {</td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">				arry <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">isArray</span>( <span class="pl-smi">c</span>.<span class="pl-smi">sortAppend</span> ) <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortAppend</span> <span class="pl-k">:</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortAppend</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-c1">0</span> ][ <span class="pl-c1">0</span> ] ];</td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( arry ) ) {</td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> <span class="pl-smi">arry</span>.<span class="pl-c1">length</span>; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( arry[ indx ][ <span class="pl-c1">0</span> ] <span class="pl-k">!==</span> col <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">ts</span>.<span class="pl-en">isValueInArray</span>( arry[ indx ][ <span class="pl-c1">0</span> ], <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> ) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">							dir <span class="pl-k">=</span> arry[ indx ][ <span class="pl-c1">1</span> ];</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">							temp <span class="pl-k">=</span> ( <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> dir ).<span class="pl-c1">match</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(a<span class="pl-k">|</span>d<span class="pl-k">|</span>s<span class="pl-k">|</span>o<span class="pl-k">|</span>n)<span class="pl-pds">/</span></span> );</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( temp ) {</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">								tmp <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-c1">0</span> ][ <span class="pl-c1">1</span> ];</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">switch</span> ( temp[ <span class="pl-c1">0</span> ] ) {</td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>d<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">										dir <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">										dir <span class="pl-k">=</span> tmp;</td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>o<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">										dir <span class="pl-k">=</span> tmp <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&#39;</span>n<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">										dir <span class="pl-k">=</span> ( tmp <span class="pl-k">+</span> <span class="pl-c1">1</span> ) <span class="pl-k">%</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortReset</span> <span class="pl-k">?</span> <span class="pl-c1">3</span> <span class="pl-k">:</span> <span class="pl-c1">2</span> );</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">									<span class="pl-k">default</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">										dir <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">										<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> [ arry[ indx ][ <span class="pl-c1">0</span> ], dir ];</td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// sortBegin event triggered immediately before the sort</span></td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortBegin<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// setTimeout needed so the processing icon shows up</span></td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">setTimeout</span>( <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// set css for headers</span></td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">setHeadersCss</span>( c );</td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">multisort</span>( c );</td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">appendCache</span>( c );</td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortBeforeEnd<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortEnd<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// sort multiple columns</span></td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">multisort</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span> ) { <span class="pl-c">/*jshint loopfunc:true */</span></td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tbodyIndex, sortTime, colMax, rows,</td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">				table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>,</td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">				dir <span class="pl-k">=</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">				textSorter <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">textSorter</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">				sortList <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>,</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">				sortLen <span class="pl-k">=</span> <span class="pl-smi">sortList</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1618" class="blob-num js-line-number" data-line-number="1618"></td>
        <td id="LC1618" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">serverSideSorting</span> <span class="pl-k">||</span> <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cache</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1619" class="blob-num js-line-number" data-line-number="1619"></td>
        <td id="LC1619" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// empty table - fixes #206/#346</span></td>
      </tr>
      <tr>
        <td id="L1620" class="blob-num js-line-number" data-line-number="1620"></td>
        <td id="LC1620" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1621" class="blob-num js-line-number" data-line-number="1621"></td>
        <td id="LC1621" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1622" class="blob-num js-line-number" data-line-number="1622"></td>
        <td id="LC1622" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) { sortTime <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(); }</td>
      </tr>
      <tr>
        <td id="L1623" class="blob-num js-line-number" data-line-number="1623"></td>
        <td id="LC1623" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( tbodyIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; tbodyIndex <span class="pl-k">&lt;</span> len; tbodyIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1624" class="blob-num js-line-number" data-line-number="1624"></td>
        <td id="LC1624" class="blob-code blob-code-inner js-file-line">				colMax <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ].<span class="pl-smi">colMax</span>;</td>
      </tr>
      <tr>
        <td id="L1625" class="blob-num js-line-number" data-line-number="1625"></td>
        <td id="LC1625" class="blob-code blob-code-inner js-file-line">				rows <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">cache</span>[ tbodyIndex ].<span class="pl-smi">normalized</span>;</td>
      </tr>
      <tr>
        <td id="L1626" class="blob-num js-line-number" data-line-number="1626"></td>
        <td id="LC1626" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1627" class="blob-num js-line-number" data-line-number="1627"></td>
        <td id="LC1627" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">rows</span>.<span class="pl-c1">sort</span>( <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span> ) {</td>
      </tr>
      <tr>
        <td id="L1628" class="blob-num js-line-number" data-line-number="1628"></td>
        <td id="LC1628" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> sortIndex, num, col, order, sort, x, y;</td>
      </tr>
      <tr>
        <td id="L1629" class="blob-num js-line-number" data-line-number="1629"></td>
        <td id="LC1629" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// rows is undefined here in IE, so don&#39;t use it!</span></td>
      </tr>
      <tr>
        <td id="L1630" class="blob-num js-line-number" data-line-number="1630"></td>
        <td id="LC1630" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( sortIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; sortIndex <span class="pl-k">&lt;</span> sortLen; sortIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1631" class="blob-num js-line-number" data-line-number="1631"></td>
        <td id="LC1631" class="blob-code blob-code-inner js-file-line">						col <span class="pl-k">=</span> sortList[ sortIndex ][ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L1632" class="blob-num js-line-number" data-line-number="1632"></td>
        <td id="LC1632" class="blob-code blob-code-inner js-file-line">						order <span class="pl-k">=</span> sortList[ sortIndex ][ <span class="pl-c1">1</span> ];</td>
      </tr>
      <tr>
        <td id="L1633" class="blob-num js-line-number" data-line-number="1633"></td>
        <td id="LC1633" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// sort direction, true = asc, false = desc</span></td>
      </tr>
      <tr>
        <td id="L1634" class="blob-num js-line-number" data-line-number="1634"></td>
        <td id="LC1634" class="blob-code blob-code-inner js-file-line">						dir <span class="pl-k">=</span> order <span class="pl-k">===</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1635" class="blob-num js-line-number" data-line-number="1635"></td>
        <td id="LC1635" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1636" class="blob-num js-line-number" data-line-number="1636"></td>
        <td id="LC1636" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">sortStable</span> <span class="pl-k">&amp;&amp;</span> a[ col ] <span class="pl-k">===</span> b[ col ] <span class="pl-k">&amp;&amp;</span> sortLen <span class="pl-k">===</span> <span class="pl-c1">1</span> ) {</td>
      </tr>
      <tr>
        <td id="L1637" class="blob-num js-line-number" data-line-number="1637"></td>
        <td id="LC1637" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> a[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">order</span> <span class="pl-k">-</span> b[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">order</span>;</td>
      </tr>
      <tr>
        <td id="L1638" class="blob-num js-line-number" data-line-number="1638"></td>
        <td id="LC1638" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1639" class="blob-num js-line-number" data-line-number="1639"></td>
        <td id="LC1639" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1640" class="blob-num js-line-number" data-line-number="1640"></td>
        <td id="LC1640" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// fallback to natural sort since it is more robust</span></td>
      </tr>
      <tr>
        <td id="L1641" class="blob-num js-line-number" data-line-number="1641"></td>
        <td id="LC1641" class="blob-code blob-code-inner js-file-line">						num <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>n<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>( <span class="pl-smi">ts</span>.<span class="pl-en">getSortType</span>( <span class="pl-smi">c</span>.<span class="pl-smi">parsers</span>, col ) );</td>
      </tr>
      <tr>
        <td id="L1642" class="blob-num js-line-number" data-line-number="1642"></td>
        <td id="LC1642" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( num <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">strings</span>[ col ] ) {</td>
      </tr>
      <tr>
        <td id="L1643" class="blob-num js-line-number" data-line-number="1643"></td>
        <td id="LC1643" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// sort strings in numerical columns</span></td>
      </tr>
      <tr>
        <td id="L1644" class="blob-num js-line-number" data-line-number="1644"></td>
        <td id="LC1644" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> ( <span class="pl-smi">ts</span>.<span class="pl-smi">string</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">strings</span>[ col ] ] ) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1645" class="blob-num js-line-number" data-line-number="1645"></td>
        <td id="LC1645" class="blob-code blob-code-inner js-file-line">								num <span class="pl-k">=</span> ( dir <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) <span class="pl-k">*</span> ( <span class="pl-smi">ts</span>.<span class="pl-smi">string</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">strings</span>[ col ] ] <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L1646" class="blob-num js-line-number" data-line-number="1646"></td>
        <td id="LC1646" class="blob-code blob-code-inner js-file-line">							} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1647" class="blob-num js-line-number" data-line-number="1647"></td>
        <td id="LC1647" class="blob-code blob-code-inner js-file-line">								num <span class="pl-k">=</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">strings</span>[ col ] ) <span class="pl-k">?</span> <span class="pl-smi">ts</span>.<span class="pl-smi">string</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">strings</span>[ col ] ] <span class="pl-k">||</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1648" class="blob-num js-line-number" data-line-number="1648"></td>
        <td id="LC1648" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1649" class="blob-num js-line-number" data-line-number="1649"></td>
        <td id="LC1649" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// fall back to built-in numeric sort</span></td>
      </tr>
      <tr>
        <td id="L1650" class="blob-num js-line-number" data-line-number="1650"></td>
        <td id="LC1650" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// var sort = $.tablesorter[&#39;sort&#39; + s]( a[col], b[col], dir, colMax[col], table );</span></td>
      </tr>
      <tr>
        <td id="L1651" class="blob-num js-line-number" data-line-number="1651"></td>
        <td id="LC1651" class="blob-code blob-code-inner js-file-line">							sort <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">numberSorter</span> <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-en">numberSorter</span>( a[ col ], b[ col ], dir, colMax[ col ], table ) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L1652" class="blob-num js-line-number" data-line-number="1652"></td>
        <td id="LC1652" class="blob-code blob-code-inner js-file-line">								ts[ <span class="pl-s"><span class="pl-pds">&#39;</span>sortNumeric<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( dir <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Asc<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Desc<span class="pl-pds">&#39;</span></span> ) ]( a[ col ], b[ col ], num, colMax[ col ], col, c );</td>
      </tr>
      <tr>
        <td id="L1653" class="blob-num js-line-number" data-line-number="1653"></td>
        <td id="LC1653" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1654" class="blob-num js-line-number" data-line-number="1654"></td>
        <td id="LC1654" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// set a &amp; b depending on sort direction</span></td>
      </tr>
      <tr>
        <td id="L1655" class="blob-num js-line-number" data-line-number="1655"></td>
        <td id="LC1655" class="blob-code blob-code-inner js-file-line">							x <span class="pl-k">=</span> dir <span class="pl-k">?</span> a <span class="pl-k">:</span> b;</td>
      </tr>
      <tr>
        <td id="L1656" class="blob-num js-line-number" data-line-number="1656"></td>
        <td id="LC1656" class="blob-code blob-code-inner js-file-line">							y <span class="pl-k">=</span> dir <span class="pl-k">?</span> b <span class="pl-k">:</span> a;</td>
      </tr>
      <tr>
        <td id="L1657" class="blob-num js-line-number" data-line-number="1657"></td>
        <td id="LC1657" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">// text sort function</span></td>
      </tr>
      <tr>
        <td id="L1658" class="blob-num js-line-number" data-line-number="1658"></td>
        <td id="LC1658" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> textSorter <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1659" class="blob-num js-line-number" data-line-number="1659"></td>
        <td id="LC1659" class="blob-code blob-code-inner js-file-line">								<span class="pl-c">// custom OVERALL text sorter</span></td>
      </tr>
      <tr>
        <td id="L1660" class="blob-num js-line-number" data-line-number="1660"></td>
        <td id="LC1660" class="blob-code blob-code-inner js-file-line">								sort <span class="pl-k">=</span> <span class="pl-en">textSorter</span>( x[ col ], y[ col ], dir, col, table );</td>
      </tr>
      <tr>
        <td id="L1661" class="blob-num js-line-number" data-line-number="1661"></td>
        <td id="LC1661" class="blob-code blob-code-inner js-file-line">							} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> textSorter <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">textSorter</span>.<span class="pl-en">hasOwnProperty</span>( col ) ) {</td>
      </tr>
      <tr>
        <td id="L1662" class="blob-num js-line-number" data-line-number="1662"></td>
        <td id="LC1662" class="blob-code blob-code-inner js-file-line">								<span class="pl-c">// custom text sorter for a SPECIFIC COLUMN</span></td>
      </tr>
      <tr>
        <td id="L1663" class="blob-num js-line-number" data-line-number="1663"></td>
        <td id="LC1663" class="blob-code blob-code-inner js-file-line">								sort <span class="pl-k">=</span> textSorter[ col ]( x[ col ], y[ col ], dir, col, table );</td>
      </tr>
      <tr>
        <td id="L1664" class="blob-num js-line-number" data-line-number="1664"></td>
        <td id="LC1664" class="blob-code blob-code-inner js-file-line">							} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1665" class="blob-num js-line-number" data-line-number="1665"></td>
        <td id="LC1665" class="blob-code blob-code-inner js-file-line">								<span class="pl-c">// fall back to natural sort</span></td>
      </tr>
      <tr>
        <td id="L1666" class="blob-num js-line-number" data-line-number="1666"></td>
        <td id="LC1666" class="blob-code blob-code-inner js-file-line">								sort <span class="pl-k">=</span> ts[ <span class="pl-s"><span class="pl-pds">&#39;</span>sortNatural<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( dir <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Asc<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Desc<span class="pl-pds">&#39;</span></span> ) ]( a[ col ], b[ col ], col, c );</td>
      </tr>
      <tr>
        <td id="L1667" class="blob-num js-line-number" data-line-number="1667"></td>
        <td id="LC1667" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1668" class="blob-num js-line-number" data-line-number="1668"></td>
        <td id="LC1668" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1669" class="blob-num js-line-number" data-line-number="1669"></td>
        <td id="LC1669" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( sort ) { <span class="pl-k">return</span> sort; }</td>
      </tr>
      <tr>
        <td id="L1670" class="blob-num js-line-number" data-line-number="1670"></td>
        <td id="LC1670" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1671" class="blob-num js-line-number" data-line-number="1671"></td>
        <td id="LC1671" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> a[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">order</span> <span class="pl-k">-</span> b[ <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> ].<span class="pl-smi">order</span>;</td>
      </tr>
      <tr>
        <td id="L1672" class="blob-num js-line-number" data-line-number="1672"></td>
        <td id="LC1672" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L1673" class="blob-num js-line-number" data-line-number="1673"></td>
        <td id="LC1673" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1674" class="blob-num js-line-number" data-line-number="1674"></td>
        <td id="LC1674" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1675" class="blob-num js-line-number" data-line-number="1675"></td>
        <td id="LC1675" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Applying sort <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">sortList</span>.<span class="pl-c1">toString</span>() <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( sortTime ) );</td>
      </tr>
      <tr>
        <td id="L1676" class="blob-num js-line-number" data-line-number="1676"></td>
        <td id="LC1676" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1677" class="blob-num js-line-number" data-line-number="1677"></td>
        <td id="LC1677" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1678" class="blob-num js-line-number" data-line-number="1678"></td>
        <td id="LC1678" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1679" class="blob-num js-line-number" data-line-number="1679"></td>
        <td id="LC1679" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">resortComplete</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1680" class="blob-num js-line-number" data-line-number="1680"></td>
        <td id="LC1680" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> ) {</td>
      </tr>
      <tr>
        <td id="L1681" class="blob-num js-line-number" data-line-number="1681"></td>
        <td id="LC1681" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>updateComplete<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">c</span>.<span class="pl-smi">table</span> );</td>
      </tr>
      <tr>
        <td id="L1682" class="blob-num js-line-number" data-line-number="1682"></td>
        <td id="LC1682" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1683" class="blob-num js-line-number" data-line-number="1683"></td>
        <td id="LC1683" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">$</span>.<span class="pl-en">isFunction</span>( callback ) ) {</td>
      </tr>
      <tr>
        <td id="L1684" class="blob-num js-line-number" data-line-number="1684"></td>
        <td id="LC1684" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>( <span class="pl-smi">c</span>.<span class="pl-smi">table</span> );</td>
      </tr>
      <tr>
        <td id="L1685" class="blob-num js-line-number" data-line-number="1685"></td>
        <td id="LC1685" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1686" class="blob-num js-line-number" data-line-number="1686"></td>
        <td id="LC1686" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1687" class="blob-num js-line-number" data-line-number="1687"></td>
        <td id="LC1687" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1688" class="blob-num js-line-number" data-line-number="1688"></td>
        <td id="LC1688" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">checkResort</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">resort</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1689" class="blob-num js-line-number" data-line-number="1689"></td>
        <td id="LC1689" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sortList <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">isArray</span>( resort ) <span class="pl-k">?</span> resort <span class="pl-k">:</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>,</td>
      </tr>
      <tr>
        <td id="L1690" class="blob-num js-line-number" data-line-number="1690"></td>
        <td id="LC1690" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// if no resort parameter is passed, fallback to config.resort (true by default)</span></td>
      </tr>
      <tr>
        <td id="L1691" class="blob-num js-line-number" data-line-number="1691"></td>
        <td id="LC1691" class="blob-code blob-code-inner js-file-line">				resrt <span class="pl-k">=</span> <span class="pl-k">typeof</span> resort <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-smi">c</span>.<span class="pl-smi">resort</span> <span class="pl-k">:</span> resort;</td>
      </tr>
      <tr>
        <td id="L1692" class="blob-num js-line-number" data-line-number="1692"></td>
        <td id="LC1692" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// don&#39;t try to resort if the table is still processing</span></td>
      </tr>
      <tr>
        <td id="L1693" class="blob-num js-line-number" data-line-number="1693"></td>
        <td id="LC1693" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// this will catch spamming of the updateCell method</span></td>
      </tr>
      <tr>
        <td id="L1694" class="blob-num js-line-number" data-line-number="1694"></td>
        <td id="LC1694" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( resrt <span class="pl-k">!==</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">serverSideSorting</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">table</span>.<span class="pl-smi">isProcessing</span> ) {</td>
      </tr>
      <tr>
        <td id="L1695" class="blob-num js-line-number" data-line-number="1695"></td>
        <td id="LC1695" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L1696" class="blob-num js-line-number" data-line-number="1696"></td>
        <td id="LC1696" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">sortOn</span>( c, sortList, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1697" class="blob-num js-line-number" data-line-number="1697"></td>
        <td id="LC1697" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">ts</span>.<span class="pl-en">resortComplete</span>( c, callback );</td>
      </tr>
      <tr>
        <td id="L1698" class="blob-num js-line-number" data-line-number="1698"></td>
        <td id="LC1698" class="blob-code blob-code-inner js-file-line">					}, <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L1699" class="blob-num js-line-number" data-line-number="1699"></td>
        <td id="LC1699" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1700" class="blob-num js-line-number" data-line-number="1700"></td>
        <td id="LC1700" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">sortReset</span>( c, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1701" class="blob-num js-line-number" data-line-number="1701"></td>
        <td id="LC1701" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">ts</span>.<span class="pl-en">resortComplete</span>( c, callback );</td>
      </tr>
      <tr>
        <td id="L1702" class="blob-num js-line-number" data-line-number="1702"></td>
        <td id="LC1702" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L1703" class="blob-num js-line-number" data-line-number="1703"></td>
        <td id="LC1703" class="blob-code blob-code-inner js-file-line">					} );</td>
      </tr>
      <tr>
        <td id="L1704" class="blob-num js-line-number" data-line-number="1704"></td>
        <td id="LC1704" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1705" class="blob-num js-line-number" data-line-number="1705"></td>
        <td id="LC1705" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1706" class="blob-num js-line-number" data-line-number="1706"></td>
        <td id="LC1706" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">resortComplete</span>( c, callback );</td>
      </tr>
      <tr>
        <td id="L1707" class="blob-num js-line-number" data-line-number="1707"></td>
        <td id="LC1707" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( <span class="pl-smi">c</span>.<span class="pl-smi">table</span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L1708" class="blob-num js-line-number" data-line-number="1708"></td>
        <td id="LC1708" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1709" class="blob-num js-line-number" data-line-number="1709"></td>
        <td id="LC1709" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1710" class="blob-num js-line-number" data-line-number="1710"></td>
        <td id="LC1710" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1711" class="blob-num js-line-number" data-line-number="1711"></td>
        <td id="LC1711" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortOn</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">list</span>, <span class="pl-smi">callback</span>, <span class="pl-smi">init</span> ) {</td>
      </tr>
      <tr>
        <td id="L1712" class="blob-num js-line-number" data-line-number="1712"></td>
        <td id="LC1712" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> table <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">table</span>;</td>
      </tr>
      <tr>
        <td id="L1713" class="blob-num js-line-number" data-line-number="1713"></td>
        <td id="LC1713" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortStart<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1714" class="blob-num js-line-number" data-line-number="1714"></td>
        <td id="LC1714" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// update header count index</span></td>
      </tr>
      <tr>
        <td id="L1715" class="blob-num js-line-number" data-line-number="1715"></td>
        <td id="LC1715" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">updateHeaderSortCount</span>( c, list );</td>
      </tr>
      <tr>
        <td id="L1716" class="blob-num js-line-number" data-line-number="1716"></td>
        <td id="LC1716" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// set css for headers</span></td>
      </tr>
      <tr>
        <td id="L1717" class="blob-num js-line-number" data-line-number="1717"></td>
        <td id="LC1717" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">setHeadersCss</span>( c );</td>
      </tr>
      <tr>
        <td id="L1718" class="blob-num js-line-number" data-line-number="1718"></td>
        <td id="LC1718" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// fixes #346</span></td>
      </tr>
      <tr>
        <td id="L1719" class="blob-num js-line-number" data-line-number="1719"></td>
        <td id="LC1719" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">delayInit</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cache</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1720" class="blob-num js-line-number" data-line-number="1720"></td>
        <td id="LC1720" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">buildCache</span>( c );</td>
      </tr>
      <tr>
        <td id="L1721" class="blob-num js-line-number" data-line-number="1721"></td>
        <td id="LC1721" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1722" class="blob-num js-line-number" data-line-number="1722"></td>
        <td id="LC1722" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortBegin<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1723" class="blob-num js-line-number" data-line-number="1723"></td>
        <td id="LC1723" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// sort the table and append it to the dom</span></td>
      </tr>
      <tr>
        <td id="L1724" class="blob-num js-line-number" data-line-number="1724"></td>
        <td id="LC1724" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">multisort</span>( c );</td>
      </tr>
      <tr>
        <td id="L1725" class="blob-num js-line-number" data-line-number="1725"></td>
        <td id="LC1725" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">appendCache</span>( c, init );</td>
      </tr>
      <tr>
        <td id="L1726" class="blob-num js-line-number" data-line-number="1726"></td>
        <td id="LC1726" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortBeforeEnd<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1727" class="blob-num js-line-number" data-line-number="1727"></td>
        <td id="LC1727" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>sortEnd<span class="pl-pds">&#39;</span></span>, table );</td>
      </tr>
      <tr>
        <td id="L1728" class="blob-num js-line-number" data-line-number="1728"></td>
        <td id="LC1728" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( table );</td>
      </tr>
      <tr>
        <td id="L1729" class="blob-num js-line-number" data-line-number="1729"></td>
        <td id="LC1729" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">$</span>.<span class="pl-en">isFunction</span>( callback ) ) {</td>
      </tr>
      <tr>
        <td id="L1730" class="blob-num js-line-number" data-line-number="1730"></td>
        <td id="LC1730" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>( table );</td>
      </tr>
      <tr>
        <td id="L1731" class="blob-num js-line-number" data-line-number="1731"></td>
        <td id="LC1731" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1732" class="blob-num js-line-number" data-line-number="1732"></td>
        <td id="LC1732" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1733" class="blob-num js-line-number" data-line-number="1733"></td>
        <td id="LC1733" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1734" class="blob-num js-line-number" data-line-number="1734"></td>
        <td id="LC1734" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortReset</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">c</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1735" class="blob-num js-line-number" data-line-number="1735"></td>
        <td id="LC1735" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1736" class="blob-num js-line-number" data-line-number="1736"></td>
        <td id="LC1736" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">setHeadersCss</span>( c );</td>
      </tr>
      <tr>
        <td id="L1737" class="blob-num js-line-number" data-line-number="1737"></td>
        <td id="LC1737" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">multisort</span>( c );</td>
      </tr>
      <tr>
        <td id="L1738" class="blob-num js-line-number" data-line-number="1738"></td>
        <td id="LC1738" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">appendCache</span>( c );</td>
      </tr>
      <tr>
        <td id="L1739" class="blob-num js-line-number" data-line-number="1739"></td>
        <td id="LC1739" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">$</span>.<span class="pl-en">isFunction</span>( callback ) ) {</td>
      </tr>
      <tr>
        <td id="L1740" class="blob-num js-line-number" data-line-number="1740"></td>
        <td id="LC1740" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>( <span class="pl-smi">c</span>.<span class="pl-smi">table</span> );</td>
      </tr>
      <tr>
        <td id="L1741" class="blob-num js-line-number" data-line-number="1741"></td>
        <td id="LC1741" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1742" class="blob-num js-line-number" data-line-number="1742"></td>
        <td id="LC1742" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1743" class="blob-num js-line-number" data-line-number="1743"></td>
        <td id="LC1743" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1744" class="blob-num js-line-number" data-line-number="1744"></td>
        <td id="LC1744" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getSortType</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">parsers</span>, <span class="pl-smi">column</span> ) {</td>
      </tr>
      <tr>
        <td id="L1745" class="blob-num js-line-number" data-line-number="1745"></td>
        <td id="LC1745" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> ( parsers <span class="pl-k">&amp;&amp;</span> parsers[ column ] ) <span class="pl-k">?</span> parsers[ column ].<span class="pl-c1">type</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1746" class="blob-num js-line-number" data-line-number="1746"></td>
        <td id="LC1746" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1747" class="blob-num js-line-number" data-line-number="1747"></td>
        <td id="LC1747" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1748" class="blob-num js-line-number" data-line-number="1748"></td>
        <td id="LC1748" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getOrder</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">val</span> ) {</td>
      </tr>
      <tr>
        <td id="L1749" class="blob-num js-line-number" data-line-number="1749"></td>
        <td id="LC1749" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// look for &#39;d&#39; in &#39;desc&#39; order; return true</span></td>
      </tr>
      <tr>
        <td id="L1750" class="blob-num js-line-number" data-line-number="1750"></td>
        <td id="LC1750" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> (<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>d<span class="pl-pds">/</span>i</span>.<span class="pl-c1">test</span>( val ) <span class="pl-k">||</span> val <span class="pl-k">===</span> <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L1751" class="blob-num js-line-number" data-line-number="1751"></td>
        <td id="LC1751" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1752" class="blob-num js-line-number" data-line-number="1752"></td>
        <td id="LC1752" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1753" class="blob-num js-line-number" data-line-number="1753"></td>
        <td id="LC1753" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// Natural sort - https://github.com/overset/javascript-natural-sort (date sorting removed)</span></td>
      </tr>
      <tr>
        <td id="L1754" class="blob-num js-line-number" data-line-number="1754"></td>
        <td id="LC1754" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// this function will only accept strings, or you&#39;ll see &#39;TypeError: undefined is not a function&#39;</span></td>
      </tr>
      <tr>
        <td id="L1755" class="blob-num js-line-number" data-line-number="1755"></td>
        <td id="LC1755" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// I could add a = a.toString(); b = b.toString(); but it&#39;ll slow down the sort overall</span></td>
      </tr>
      <tr>
        <td id="L1756" class="blob-num js-line-number" data-line-number="1756"></td>
        <td id="LC1756" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortNatural</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span> ) {</td>
      </tr>
      <tr>
        <td id="L1757" class="blob-num js-line-number" data-line-number="1757"></td>
        <td id="LC1757" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> b ) { <span class="pl-k">return</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L1758" class="blob-num js-line-number" data-line-number="1758"></td>
        <td id="LC1758" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> aNum, bNum, aFloat, bFloat, indx, max,</td>
      </tr>
      <tr>
        <td id="L1759" class="blob-num js-line-number" data-line-number="1759"></td>
        <td id="LC1759" class="blob-code blob-code-inner js-file-line">				regex <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>;</td>
      </tr>
      <tr>
        <td id="L1760" class="blob-num js-line-number" data-line-number="1760"></td>
        <td id="LC1760" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// first try and sort Hex codes</span></td>
      </tr>
      <tr>
        <td id="L1761" class="blob-num js-line-number" data-line-number="1761"></td>
        <td id="LC1761" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">regex</span>.<span class="pl-smi">hex</span>.<span class="pl-c1">test</span>( b ) ) {</td>
      </tr>
      <tr>
        <td id="L1762" class="blob-num js-line-number" data-line-number="1762"></td>
        <td id="LC1762" class="blob-code blob-code-inner js-file-line">				aNum <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">a</span>.<span class="pl-c1">match</span>( <span class="pl-smi">regex</span>.<span class="pl-smi">hex</span> ), <span class="pl-c1">16</span> );</td>
      </tr>
      <tr>
        <td id="L1763" class="blob-num js-line-number" data-line-number="1763"></td>
        <td id="LC1763" class="blob-code blob-code-inner js-file-line">				bNum <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( <span class="pl-smi">b</span>.<span class="pl-c1">match</span>( <span class="pl-smi">regex</span>.<span class="pl-smi">hex</span> ), <span class="pl-c1">16</span> );</td>
      </tr>
      <tr>
        <td id="L1764" class="blob-num js-line-number" data-line-number="1764"></td>
        <td id="LC1764" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( aNum <span class="pl-k">&lt;</span> bNum ) { <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1765" class="blob-num js-line-number" data-line-number="1765"></td>
        <td id="LC1765" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( aNum <span class="pl-k">&gt;</span> bNum ) { <span class="pl-k">return</span> <span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1766" class="blob-num js-line-number" data-line-number="1766"></td>
        <td id="LC1766" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1767" class="blob-num js-line-number" data-line-number="1767"></td>
        <td id="LC1767" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// chunk/tokenize</span></td>
      </tr>
      <tr>
        <td id="L1768" class="blob-num js-line-number" data-line-number="1768"></td>
        <td id="LC1768" class="blob-code blob-code-inner js-file-line">			aNum <span class="pl-k">=</span> <span class="pl-smi">a</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">regex</span>.<span class="pl-smi">chunk</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>0$1<span class="pl-cce">\\</span>0<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">regex</span>.<span class="pl-smi">chunks</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>0<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1769" class="blob-num js-line-number" data-line-number="1769"></td>
        <td id="LC1769" class="blob-code blob-code-inner js-file-line">			bNum <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">regex</span>.<span class="pl-smi">chunk</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>0$1<span class="pl-cce">\\</span>0<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">regex</span>.<span class="pl-smi">chunks</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>0<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1770" class="blob-num js-line-number" data-line-number="1770"></td>
        <td id="LC1770" class="blob-code blob-code-inner js-file-line">			max <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">max</span>( <span class="pl-smi">aNum</span>.<span class="pl-c1">length</span>, <span class="pl-smi">bNum</span>.<span class="pl-c1">length</span> );</td>
      </tr>
      <tr>
        <td id="L1771" class="blob-num js-line-number" data-line-number="1771"></td>
        <td id="LC1771" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// natural sorting through split numeric strings and default strings</span></td>
      </tr>
      <tr>
        <td id="L1772" class="blob-num js-line-number" data-line-number="1772"></td>
        <td id="LC1772" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> max; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1773" class="blob-num js-line-number" data-line-number="1773"></td>
        <td id="LC1773" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// find floats not starting with &#39;0&#39;, string or 0 if not defined</span></td>
      </tr>
      <tr>
        <td id="L1774" class="blob-num js-line-number" data-line-number="1774"></td>
        <td id="LC1774" class="blob-code blob-code-inner js-file-line">				aFloat <span class="pl-k">=</span> <span class="pl-c1">isNaN</span>( aNum[ indx ] ) <span class="pl-k">?</span> aNum[ indx ] <span class="pl-k">||</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">parseFloat</span>( aNum[ indx ] ) <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1775" class="blob-num js-line-number" data-line-number="1775"></td>
        <td id="LC1775" class="blob-code blob-code-inner js-file-line">				bFloat <span class="pl-k">=</span> <span class="pl-c1">isNaN</span>( bNum[ indx ] ) <span class="pl-k">?</span> bNum[ indx ] <span class="pl-k">||</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">parseFloat</span>( bNum[ indx ] ) <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1776" class="blob-num js-line-number" data-line-number="1776"></td>
        <td id="LC1776" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// handle numeric vs string comparison - number &lt; string - (Kyle Adams)</span></td>
      </tr>
      <tr>
        <td id="L1777" class="blob-num js-line-number" data-line-number="1777"></td>
        <td id="LC1777" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-c1">isNaN</span>( aFloat ) <span class="pl-k">!==</span> <span class="pl-c1">isNaN</span>( bFloat ) ) { <span class="pl-k">return</span> <span class="pl-c1">isNaN</span>( aFloat ) <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1778" class="blob-num js-line-number" data-line-number="1778"></td>
        <td id="LC1778" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// rely on string comparison if different types - i.e. &#39;02&#39; &lt; 2 != &#39;02&#39; &lt; &#39;2&#39;</span></td>
      </tr>
      <tr>
        <td id="L1779" class="blob-num js-line-number" data-line-number="1779"></td>
        <td id="LC1779" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> aFloat <span class="pl-k">!==</span> <span class="pl-k">typeof</span> bFloat ) {</td>
      </tr>
      <tr>
        <td id="L1780" class="blob-num js-line-number" data-line-number="1780"></td>
        <td id="LC1780" class="blob-code blob-code-inner js-file-line">					aFloat <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1781" class="blob-num js-line-number" data-line-number="1781"></td>
        <td id="LC1781" class="blob-code blob-code-inner js-file-line">					bFloat <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1782" class="blob-num js-line-number" data-line-number="1782"></td>
        <td id="LC1782" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1783" class="blob-num js-line-number" data-line-number="1783"></td>
        <td id="LC1783" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( aFloat <span class="pl-k">&lt;</span> bFloat ) { <span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1784" class="blob-num js-line-number" data-line-number="1784"></td>
        <td id="LC1784" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( aFloat <span class="pl-k">&gt;</span> bFloat ) { <span class="pl-k">return</span> <span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1785" class="blob-num js-line-number" data-line-number="1785"></td>
        <td id="LC1785" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1786" class="blob-num js-line-number" data-line-number="1786"></td>
        <td id="LC1786" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1787" class="blob-num js-line-number" data-line-number="1787"></td>
        <td id="LC1787" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1788" class="blob-num js-line-number" data-line-number="1788"></td>
        <td id="LC1788" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1789" class="blob-num js-line-number" data-line-number="1789"></td>
        <td id="LC1789" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortNaturalAsc</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">col</span>, <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L1790" class="blob-num js-line-number" data-line-number="1790"></td>
        <td id="LC1790" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> b ) { <span class="pl-k">return</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L1791" class="blob-num js-line-number" data-line-number="1791"></td>
        <td id="LC1791" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> empty <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">string</span>[ ( <span class="pl-smi">c</span>.<span class="pl-smi">empties</span>[ col ] <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">emptyTo</span> ) ];</td>
      </tr>
      <tr>
        <td id="L1792" class="blob-num js-line-number" data-line-number="1792"></td>
        <td id="LC1792" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span> ) <span class="pl-k">:</span> <span class="pl-k">-</span>empty <span class="pl-k">||</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1793" class="blob-num js-line-number" data-line-number="1793"></td>
        <td id="LC1793" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( b <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) <span class="pl-k">:</span> empty <span class="pl-k">||</span> <span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1794" class="blob-num js-line-number" data-line-number="1794"></td>
        <td id="LC1794" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-en">sortNatural</span>( a, b );</td>
      </tr>
      <tr>
        <td id="L1795" class="blob-num js-line-number" data-line-number="1795"></td>
        <td id="LC1795" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1796" class="blob-num js-line-number" data-line-number="1796"></td>
        <td id="LC1796" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1797" class="blob-num js-line-number" data-line-number="1797"></td>
        <td id="LC1797" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortNaturalDesc</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">col</span>, <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L1798" class="blob-num js-line-number" data-line-number="1798"></td>
        <td id="LC1798" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> b ) { <span class="pl-k">return</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L1799" class="blob-num js-line-number" data-line-number="1799"></td>
        <td id="LC1799" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> empty <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">string</span>[ ( <span class="pl-smi">c</span>.<span class="pl-smi">empties</span>[ col ] <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">emptyTo</span> ) ];</td>
      </tr>
      <tr>
        <td id="L1800" class="blob-num js-line-number" data-line-number="1800"></td>
        <td id="LC1800" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span> ) <span class="pl-k">:</span> empty <span class="pl-k">||</span> <span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1801" class="blob-num js-line-number" data-line-number="1801"></td>
        <td id="LC1801" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( b <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) <span class="pl-k">:</span> <span class="pl-k">-</span>empty <span class="pl-k">||</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1802" class="blob-num js-line-number" data-line-number="1802"></td>
        <td id="LC1802" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-en">sortNatural</span>( b, a );</td>
      </tr>
      <tr>
        <td id="L1803" class="blob-num js-line-number" data-line-number="1803"></td>
        <td id="LC1803" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1804" class="blob-num js-line-number" data-line-number="1804"></td>
        <td id="LC1804" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1805" class="blob-num js-line-number" data-line-number="1805"></td>
        <td id="LC1805" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// basic alphabetical sort</span></td>
      </tr>
      <tr>
        <td id="L1806" class="blob-num js-line-number" data-line-number="1806"></td>
        <td id="LC1806" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortText</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span> ) {</td>
      </tr>
      <tr>
        <td id="L1807" class="blob-num js-line-number" data-line-number="1807"></td>
        <td id="LC1807" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> a <span class="pl-k">&gt;</span> b <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> ( a <span class="pl-k">&lt;</span> b <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L1808" class="blob-num js-line-number" data-line-number="1808"></td>
        <td id="LC1808" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1809" class="blob-num js-line-number" data-line-number="1809"></td>
        <td id="LC1809" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1810" class="blob-num js-line-number" data-line-number="1810"></td>
        <td id="LC1810" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// return text string value by adding up ascii value</span></td>
      </tr>
      <tr>
        <td id="L1811" class="blob-num js-line-number" data-line-number="1811"></td>
        <td id="LC1811" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// so the text is somewhat sorted when using a digital sort</span></td>
      </tr>
      <tr>
        <td id="L1812" class="blob-num js-line-number" data-line-number="1812"></td>
        <td id="LC1812" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// this is NOT an alphanumeric sort</span></td>
      </tr>
      <tr>
        <td id="L1813" class="blob-num js-line-number" data-line-number="1813"></td>
        <td id="LC1813" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getTextValue</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">val</span>, <span class="pl-smi">num</span>, <span class="pl-smi">max</span> ) {</td>
      </tr>
      <tr>
        <td id="L1814" class="blob-num js-line-number" data-line-number="1814"></td>
        <td id="LC1814" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( max ) {</td>
      </tr>
      <tr>
        <td id="L1815" class="blob-num js-line-number" data-line-number="1815"></td>
        <td id="LC1815" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// make sure the text value is greater than the max numerical value (max)</span></td>
      </tr>
      <tr>
        <td id="L1816" class="blob-num js-line-number" data-line-number="1816"></td>
        <td id="LC1816" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> indx,</td>
      </tr>
      <tr>
        <td id="L1817" class="blob-num js-line-number" data-line-number="1817"></td>
        <td id="LC1817" class="blob-code blob-code-inner js-file-line">					len <span class="pl-k">=</span> val <span class="pl-k">?</span> <span class="pl-smi">val</span>.<span class="pl-c1">length</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L1818" class="blob-num js-line-number" data-line-number="1818"></td>
        <td id="LC1818" class="blob-code blob-code-inner js-file-line">					n <span class="pl-k">=</span> max <span class="pl-k">+</span> num;</td>
      </tr>
      <tr>
        <td id="L1819" class="blob-num js-line-number" data-line-number="1819"></td>
        <td id="LC1819" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1820" class="blob-num js-line-number" data-line-number="1820"></td>
        <td id="LC1820" class="blob-code blob-code-inner js-file-line">					n <span class="pl-k">+=</span> <span class="pl-smi">val</span>.<span class="pl-c1">charCodeAt</span>( indx );</td>
      </tr>
      <tr>
        <td id="L1821" class="blob-num js-line-number" data-line-number="1821"></td>
        <td id="LC1821" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1822" class="blob-num js-line-number" data-line-number="1822"></td>
        <td id="LC1822" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> num <span class="pl-k">*</span> n;</td>
      </tr>
      <tr>
        <td id="L1823" class="blob-num js-line-number" data-line-number="1823"></td>
        <td id="LC1823" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1824" class="blob-num js-line-number" data-line-number="1824"></td>
        <td id="LC1824" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1825" class="blob-num js-line-number" data-line-number="1825"></td>
        <td id="LC1825" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1826" class="blob-num js-line-number" data-line-number="1826"></td>
        <td id="LC1826" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1827" class="blob-num js-line-number" data-line-number="1827"></td>
        <td id="LC1827" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortNumericAsc</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">num</span>, <span class="pl-smi">max</span>, <span class="pl-smi">col</span>, <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L1828" class="blob-num js-line-number" data-line-number="1828"></td>
        <td id="LC1828" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> b ) { <span class="pl-k">return</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L1829" class="blob-num js-line-number" data-line-number="1829"></td>
        <td id="LC1829" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> empty <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">string</span>[ ( <span class="pl-smi">c</span>.<span class="pl-smi">empties</span>[ col ] <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">emptyTo</span> ) ];</td>
      </tr>
      <tr>
        <td id="L1830" class="blob-num js-line-number" data-line-number="1830"></td>
        <td id="LC1830" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span> ) <span class="pl-k">:</span> <span class="pl-k">-</span>empty <span class="pl-k">||</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1831" class="blob-num js-line-number" data-line-number="1831"></td>
        <td id="LC1831" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( b <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) <span class="pl-k">:</span> empty <span class="pl-k">||</span> <span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1832" class="blob-num js-line-number" data-line-number="1832"></td>
        <td id="LC1832" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-c1">isNaN</span>( a ) ) { a <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getTextValue</span>( a, num, max ); }</td>
      </tr>
      <tr>
        <td id="L1833" class="blob-num js-line-number" data-line-number="1833"></td>
        <td id="LC1833" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-c1">isNaN</span>( b ) ) { b <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getTextValue</span>( b, num, max ); }</td>
      </tr>
      <tr>
        <td id="L1834" class="blob-num js-line-number" data-line-number="1834"></td>
        <td id="LC1834" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> a <span class="pl-k">-</span> b;</td>
      </tr>
      <tr>
        <td id="L1835" class="blob-num js-line-number" data-line-number="1835"></td>
        <td id="LC1835" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1836" class="blob-num js-line-number" data-line-number="1836"></td>
        <td id="LC1836" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1837" class="blob-num js-line-number" data-line-number="1837"></td>
        <td id="LC1837" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortNumericDesc</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span>, <span class="pl-smi">num</span>, <span class="pl-smi">max</span>, <span class="pl-smi">col</span>, <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L1838" class="blob-num js-line-number" data-line-number="1838"></td>
        <td id="LC1838" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> b ) { <span class="pl-k">return</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L1839" class="blob-num js-line-number" data-line-number="1839"></td>
        <td id="LC1839" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> empty <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">string</span>[ ( <span class="pl-smi">c</span>.<span class="pl-smi">empties</span>[ col ] <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">emptyTo</span> ) ];</td>
      </tr>
      <tr>
        <td id="L1840" class="blob-num js-line-number" data-line-number="1840"></td>
        <td id="LC1840" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( a <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">1</span> ) <span class="pl-k">:</span> empty <span class="pl-k">||</span> <span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1841" class="blob-num js-line-number" data-line-number="1841"></td>
        <td id="LC1841" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( b <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> empty <span class="pl-k">!==</span> <span class="pl-c1">0</span> ) { <span class="pl-k">return</span> <span class="pl-k">typeof</span> empty <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>boolean<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> ( empty <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span> ) <span class="pl-k">:</span> <span class="pl-k">-</span>empty <span class="pl-k">||</span> <span class="pl-k">-</span><span class="pl-c1">1</span>; }</td>
      </tr>
      <tr>
        <td id="L1842" class="blob-num js-line-number" data-line-number="1842"></td>
        <td id="LC1842" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-c1">isNaN</span>( a ) ) { a <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getTextValue</span>( a, num, max ); }</td>
      </tr>
      <tr>
        <td id="L1843" class="blob-num js-line-number" data-line-number="1843"></td>
        <td id="LC1843" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-c1">isNaN</span>( b ) ) { b <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getTextValue</span>( b, num, max ); }</td>
      </tr>
      <tr>
        <td id="L1844" class="blob-num js-line-number" data-line-number="1844"></td>
        <td id="LC1844" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> b <span class="pl-k">-</span> a;</td>
      </tr>
      <tr>
        <td id="L1845" class="blob-num js-line-number" data-line-number="1845"></td>
        <td id="LC1845" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1846" class="blob-num js-line-number" data-line-number="1846"></td>
        <td id="LC1846" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1847" class="blob-num js-line-number" data-line-number="1847"></td>
        <td id="LC1847" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">sortNumeric</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span> ) {</td>
      </tr>
      <tr>
        <td id="L1848" class="blob-num js-line-number" data-line-number="1848"></td>
        <td id="LC1848" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> a <span class="pl-k">-</span> b;</td>
      </tr>
      <tr>
        <td id="L1849" class="blob-num js-line-number" data-line-number="1849"></td>
        <td id="LC1849" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1850" class="blob-num js-line-number" data-line-number="1850"></td>
        <td id="LC1850" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1851" class="blob-num js-line-number" data-line-number="1851"></td>
        <td id="LC1851" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L1852" class="blob-num js-line-number" data-line-number="1852"></td>
        <td id="LC1852" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██ ██ ██ ██ █████▄ ▄████▄ ██████ ██████ ▄█████</span></td>
      </tr>
      <tr>
        <td id="L1853" class="blob-num js-line-number" data-line-number="1853"></td>
        <td id="LC1853" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██ ██ ██ ██ ██  ██ ██ ▄▄▄ ██▄▄     ██   ▀█▄</span></td>
      </tr>
      <tr>
        <td id="L1854" class="blob-num js-line-number" data-line-number="1854"></td>
        <td id="LC1854" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██ ██ ██ ██ ██  ██ ██ ▀██ ██▀▀     ██      ▀█▄</span></td>
      </tr>
      <tr>
        <td id="L1855" class="blob-num js-line-number" data-line-number="1855"></td>
        <td id="LC1855" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		███████▀ ██ █████▀ ▀████▀ ██████   ██   █████▀</span></td>
      </tr>
      <tr>
        <td id="L1856" class="blob-num js-line-number" data-line-number="1856"></td>
        <td id="LC1856" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L1857" class="blob-num js-line-number" data-line-number="1857"></td>
        <td id="LC1857" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">addWidget</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">widget</span> ) {</td>
      </tr>
      <tr>
        <td id="L1858" class="blob-num js-line-number" data-line-number="1858"></td>
        <td id="LC1858" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">ts</span>.<span class="pl-en">isEmptyObject</span>( <span class="pl-smi">ts</span>.<span class="pl-en">getWidgetById</span>( <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> ) ) ) {</td>
      </tr>
      <tr>
        <td id="L1859" class="blob-num js-line-number" data-line-number="1859"></td>
        <td id="LC1859" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; widget was loaded more than once!<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1860" class="blob-num js-line-number" data-line-number="1860"></td>
        <td id="LC1860" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1861" class="blob-num js-line-number" data-line-number="1861"></td>
        <td id="LC1861" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-smi">widgets</span>[ <span class="pl-smi">ts</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> widget;</td>
      </tr>
      <tr>
        <td id="L1862" class="blob-num js-line-number" data-line-number="1862"></td>
        <td id="LC1862" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1863" class="blob-num js-line-number" data-line-number="1863"></td>
        <td id="LC1863" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1864" class="blob-num js-line-number" data-line-number="1864"></td>
        <td id="LC1864" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">hasWidget</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">$table</span>, <span class="pl-smi">name</span> ) {</td>
      </tr>
      <tr>
        <td id="L1865" class="blob-num js-line-number" data-line-number="1865"></td>
        <td id="LC1865" class="blob-code blob-code-inner js-file-line">			$table <span class="pl-k">=</span> <span class="pl-en">$</span>( $table );</td>
      </tr>
      <tr>
        <td id="L1866" class="blob-num js-line-number" data-line-number="1866"></td>
        <td id="LC1866" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$table</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> $table[ <span class="pl-c1">0</span> ].<span class="pl-smi">config</span> <span class="pl-k">&amp;&amp;</span> $table[ <span class="pl-c1">0</span> ].<span class="pl-smi">config</span>.<span class="pl-smi">widgetInit</span>[ name ] <span class="pl-k">||</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1867" class="blob-num js-line-number" data-line-number="1867"></td>
        <td id="LC1867" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1868" class="blob-num js-line-number" data-line-number="1868"></td>
        <td id="LC1868" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1869" class="blob-num js-line-number" data-line-number="1869"></td>
        <td id="LC1869" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getWidgetById</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">name</span> ) {</td>
      </tr>
      <tr>
        <td id="L1870" class="blob-num js-line-number" data-line-number="1870"></td>
        <td id="LC1870" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indx, widget,</td>
      </tr>
      <tr>
        <td id="L1871" class="blob-num js-line-number" data-line-number="1871"></td>
        <td id="LC1871" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1872" class="blob-num js-line-number" data-line-number="1872"></td>
        <td id="LC1872" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1873" class="blob-num js-line-number" data-line-number="1873"></td>
        <td id="LC1873" class="blob-code blob-code-inner js-file-line">				widget <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">widgets</span>[ indx ];</td>
      </tr>
      <tr>
        <td id="L1874" class="blob-num js-line-number" data-line-number="1874"></td>
        <td id="LC1874" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( widget <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span>.<span class="pl-c1">toLowerCase</span>() <span class="pl-k">===</span> <span class="pl-smi">name</span>.<span class="pl-c1">toLowerCase</span>() ) {</td>
      </tr>
      <tr>
        <td id="L1875" class="blob-num js-line-number" data-line-number="1875"></td>
        <td id="LC1875" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> widget;</td>
      </tr>
      <tr>
        <td id="L1876" class="blob-num js-line-number" data-line-number="1876"></td>
        <td id="LC1876" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1877" class="blob-num js-line-number" data-line-number="1877"></td>
        <td id="LC1877" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1878" class="blob-num js-line-number" data-line-number="1878"></td>
        <td id="LC1878" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1879" class="blob-num js-line-number" data-line-number="1879"></td>
        <td id="LC1879" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1880" class="blob-num js-line-number" data-line-number="1880"></td>
        <td id="LC1880" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">applyWidgetOptions</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L1881" class="blob-num js-line-number" data-line-number="1881"></td>
        <td id="LC1881" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indx, widget,</td>
      </tr>
      <tr>
        <td id="L1882" class="blob-num js-line-number" data-line-number="1882"></td>
        <td id="LC1882" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L1883" class="blob-num js-line-number" data-line-number="1883"></td>
        <td id="LC1883" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1884" class="blob-num js-line-number" data-line-number="1884"></td>
        <td id="LC1884" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( len ) {</td>
      </tr>
      <tr>
        <td id="L1885" class="blob-num js-line-number" data-line-number="1885"></td>
        <td id="LC1885" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1886" class="blob-num js-line-number" data-line-number="1886"></td>
        <td id="LC1886" class="blob-code blob-code-inner js-file-line">					widget <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getWidgetById</span>( <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>[ indx ] );</td>
      </tr>
      <tr>
        <td id="L1887" class="blob-num js-line-number" data-line-number="1887"></td>
        <td id="LC1887" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( widget <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-c1">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L1888" class="blob-num js-line-number" data-line-number="1888"></td>
        <td id="LC1888" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">c</span>.<span class="pl-smi">widgetOptions</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>( <span class="pl-c1">true</span>, {}, <span class="pl-smi">widget</span>.<span class="pl-c1">options</span>, <span class="pl-smi">c</span>.<span class="pl-smi">widgetOptions</span> );</td>
      </tr>
      <tr>
        <td id="L1889" class="blob-num js-line-number" data-line-number="1889"></td>
        <td id="LC1889" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1890" class="blob-num js-line-number" data-line-number="1890"></td>
        <td id="LC1890" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1891" class="blob-num js-line-number" data-line-number="1891"></td>
        <td id="LC1891" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1892" class="blob-num js-line-number" data-line-number="1892"></td>
        <td id="LC1892" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1893" class="blob-num js-line-number" data-line-number="1893"></td>
        <td id="LC1893" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1894" class="blob-num js-line-number" data-line-number="1894"></td>
        <td id="LC1894" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">addWidgetFromClass</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L1895" class="blob-num js-line-number" data-line-number="1895"></td>
        <td id="LC1895" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> len, indx,</td>
      </tr>
      <tr>
        <td id="L1896" class="blob-num js-line-number" data-line-number="1896"></td>
        <td id="LC1896" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L1897" class="blob-num js-line-number" data-line-number="1897"></td>
        <td id="LC1897" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// look for widgets to apply from table class</span></td>
      </tr>
      <tr>
        <td id="L1898" class="blob-num js-line-number" data-line-number="1898"></td>
        <td id="LC1898" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// don&#39;t match from &#39;ui-widget-content&#39;; use \S instead of \w to include widgets</span></td>
      </tr>
      <tr>
        <td id="L1899" class="blob-num js-line-number" data-line-number="1899"></td>
        <td id="LC1899" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// with dashes in the name, e.g. &quot;widget-test-2&quot; extracts out &quot;test-2&quot;</span></td>
      </tr>
      <tr>
        <td id="L1900" class="blob-num js-line-number" data-line-number="1900"></td>
        <td id="LC1900" class="blob-code blob-code-inner js-file-line">				regex <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>^<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">widgetClass</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">templateName</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>(<span class="pl-cce">\\</span>S+)+<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>$<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L1901" class="blob-num js-line-number" data-line-number="1901"></td>
        <td id="LC1901" class="blob-code blob-code-inner js-file-line">				widgetClass <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>( regex, <span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L1902" class="blob-num js-line-number" data-line-number="1902"></td>
        <td id="LC1902" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// split up table class (widget id&#39;s can include dashes) - stop using match</span></td>
      </tr>
      <tr>
        <td id="L1903" class="blob-num js-line-number" data-line-number="1903"></td>
        <td id="LC1903" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// otherwise only one widget gets extracted, see #1109</span></td>
      </tr>
      <tr>
        <td id="L1904" class="blob-num js-line-number" data-line-number="1904"></td>
        <td id="LC1904" class="blob-code blob-code-inner js-file-line">				widgets <span class="pl-k">=</span> ( <span class="pl-smi">table</span>.<span class="pl-c1">className</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">split</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">spaces</span> );</td>
      </tr>
      <tr>
        <td id="L1905" class="blob-num js-line-number" data-line-number="1905"></td>
        <td id="LC1905" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">widgets</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L1906" class="blob-num js-line-number" data-line-number="1906"></td>
        <td id="LC1906" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">widgets</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1907" class="blob-num js-line-number" data-line-number="1907"></td>
        <td id="LC1907" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1908" class="blob-num js-line-number" data-line-number="1908"></td>
        <td id="LC1908" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( widgets[ indx ].<span class="pl-c1">match</span>( widgetClass ) ) {</td>
      </tr>
      <tr>
        <td id="L1909" class="blob-num js-line-number" data-line-number="1909"></td>
        <td id="LC1909" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> widgets[ indx ].<span class="pl-c1">replace</span>( widgetClass, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1910" class="blob-num js-line-number" data-line-number="1910"></td>
        <td id="LC1910" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1911" class="blob-num js-line-number" data-line-number="1911"></td>
        <td id="LC1911" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1912" class="blob-num js-line-number" data-line-number="1912"></td>
        <td id="LC1912" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1913" class="blob-num js-line-number" data-line-number="1913"></td>
        <td id="LC1913" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1914" class="blob-num js-line-number" data-line-number="1914"></td>
        <td id="LC1914" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1915" class="blob-num js-line-number" data-line-number="1915"></td>
        <td id="LC1915" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">applyWidgetId</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">id</span>, <span class="pl-smi">init</span> ) {</td>
      </tr>
      <tr>
        <td id="L1916" class="blob-num js-line-number" data-line-number="1916"></td>
        <td id="LC1916" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>(table)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1917" class="blob-num js-line-number" data-line-number="1917"></td>
        <td id="LC1917" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> applied, time, name,</td>
      </tr>
      <tr>
        <td id="L1918" class="blob-num js-line-number" data-line-number="1918"></td>
        <td id="LC1918" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L1919" class="blob-num js-line-number" data-line-number="1919"></td>
        <td id="LC1919" class="blob-code blob-code-inner js-file-line">				wo <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">widgetOptions</span>,</td>
      </tr>
      <tr>
        <td id="L1920" class="blob-num js-line-number" data-line-number="1920"></td>
        <td id="LC1920" class="blob-code blob-code-inner js-file-line">				widget <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getWidgetById</span>( id );</td>
      </tr>
      <tr>
        <td id="L1921" class="blob-num js-line-number" data-line-number="1921"></td>
        <td id="LC1921" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( widget ) {</td>
      </tr>
      <tr>
        <td id="L1922" class="blob-num js-line-number" data-line-number="1922"></td>
        <td id="LC1922" class="blob-code blob-code-inner js-file-line">				name <span class="pl-k">=</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L1923" class="blob-num js-line-number" data-line-number="1923"></td>
        <td id="LC1923" class="blob-code blob-code-inner js-file-line">				applied <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1924" class="blob-num js-line-number" data-line-number="1924"></td>
        <td id="LC1924" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// add widget name to option list so it gets reapplied after sorting, filtering, etc</span></td>
      </tr>
      <tr>
        <td id="L1925" class="blob-num js-line-number" data-line-number="1925"></td>
        <td id="LC1925" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( name, <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span> ) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L1926" class="blob-num js-line-number" data-line-number="1926"></td>
        <td id="LC1926" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>[ <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> name;</td>
      </tr>
      <tr>
        <td id="L1927" class="blob-num js-line-number" data-line-number="1927"></td>
        <td id="LC1927" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1928" class="blob-num js-line-number" data-line-number="1928"></td>
        <td id="LC1928" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) { time <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(); }</td>
      </tr>
      <tr>
        <td id="L1929" class="blob-num js-line-number" data-line-number="1929"></td>
        <td id="LC1929" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1930" class="blob-num js-line-number" data-line-number="1930"></td>
        <td id="LC1930" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( init <span class="pl-k">||</span> <span class="pl-k">!</span>( <span class="pl-smi">c</span>.<span class="pl-smi">widgetInit</span>[ name ] ) ) {</td>
      </tr>
      <tr>
        <td id="L1931" class="blob-num js-line-number" data-line-number="1931"></td>
        <td id="LC1931" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// set init flag first to prevent calling init more than once (e.g. pager)</span></td>
      </tr>
      <tr>
        <td id="L1932" class="blob-num js-line-number" data-line-number="1932"></td>
        <td id="LC1932" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">widgetInit</span>[ name ] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1933" class="blob-num js-line-number" data-line-number="1933"></td>
        <td id="LC1933" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> ) {</td>
      </tr>
      <tr>
        <td id="L1934" class="blob-num js-line-number" data-line-number="1934"></td>
        <td id="LC1934" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// don&#39;t reapply widget options on tablesorter init</span></td>
      </tr>
      <tr>
        <td id="L1935" class="blob-num js-line-number" data-line-number="1935"></td>
        <td id="LC1935" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">ts</span>.<span class="pl-en">applyWidgetOptions</span>( table );</td>
      </tr>
      <tr>
        <td id="L1936" class="blob-num js-line-number" data-line-number="1936"></td>
        <td id="LC1936" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1937" class="blob-num js-line-number" data-line-number="1937"></td>
        <td id="LC1937" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> <span class="pl-smi">widget</span>.<span class="pl-smi">init</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1938" class="blob-num js-line-number" data-line-number="1938"></td>
        <td id="LC1938" class="blob-code blob-code-inner js-file-line">						applied <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1939" class="blob-num js-line-number" data-line-number="1939"></td>
        <td id="LC1939" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1940" class="blob-num js-line-number" data-line-number="1940"></td>
        <td id="LC1940" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">group</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>group<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( <span class="pl-s"><span class="pl-pds">&#39;</span>Initializing <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> widget<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1941" class="blob-num js-line-number" data-line-number="1941"></td>
        <td id="LC1941" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1942" class="blob-num js-line-number" data-line-number="1942"></td>
        <td id="LC1942" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">widget</span>.<span class="pl-en">init</span>( table, widget, c, wo );</td>
      </tr>
      <tr>
        <td id="L1943" class="blob-num js-line-number" data-line-number="1943"></td>
        <td id="LC1943" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1944" class="blob-num js-line-number" data-line-number="1944"></td>
        <td id="LC1944" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1945" class="blob-num js-line-number" data-line-number="1945"></td>
        <td id="LC1945" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span>init <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">widget</span>.<span class="pl-smi">format</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L1946" class="blob-num js-line-number" data-line-number="1946"></td>
        <td id="LC1946" class="blob-code blob-code-inner js-file-line">					applied <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1947" class="blob-num js-line-number" data-line-number="1947"></td>
        <td id="LC1947" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1948" class="blob-num js-line-number" data-line-number="1948"></td>
        <td id="LC1948" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">group</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>group<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( <span class="pl-s"><span class="pl-pds">&#39;</span>Updating <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> widget<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1949" class="blob-num js-line-number" data-line-number="1949"></td>
        <td id="LC1949" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1950" class="blob-num js-line-number" data-line-number="1950"></td>
        <td id="LC1950" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">widget</span>.<span class="pl-en">format</span>( table, c, wo, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L1951" class="blob-num js-line-number" data-line-number="1951"></td>
        <td id="LC1951" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1952" class="blob-num js-line-number" data-line-number="1952"></td>
        <td id="LC1952" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1953" class="blob-num js-line-number" data-line-number="1953"></td>
        <td id="LC1953" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( applied ) {</td>
      </tr>
      <tr>
        <td id="L1954" class="blob-num js-line-number" data-line-number="1954"></td>
        <td id="LC1954" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Completed <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( init <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>initializing <span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>applying <span class="pl-pds">&#39;</span></span> ) <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> widget<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( time ) );</td>
      </tr>
      <tr>
        <td id="L1955" class="blob-num js-line-number" data-line-number="1955"></td>
        <td id="LC1955" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-en">console</span>.<span class="pl-smi">groupEnd</span> ) { <span class="pl-en">console</span>.<span class="pl-en">groupEnd</span>(); }</td>
      </tr>
      <tr>
        <td id="L1956" class="blob-num js-line-number" data-line-number="1956"></td>
        <td id="LC1956" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1957" class="blob-num js-line-number" data-line-number="1957"></td>
        <td id="LC1957" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1958" class="blob-num js-line-number" data-line-number="1958"></td>
        <td id="LC1958" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1959" class="blob-num js-line-number" data-line-number="1959"></td>
        <td id="LC1959" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L1960" class="blob-num js-line-number" data-line-number="1960"></td>
        <td id="LC1960" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1961" class="blob-num js-line-number" data-line-number="1961"></td>
        <td id="LC1961" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">applyWidget</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">init</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L1962" class="blob-num js-line-number" data-line-number="1962"></td>
        <td id="LC1962" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ]; <span class="pl-c">// in case this is called externally</span></td>
      </tr>
      <tr>
        <td id="L1963" class="blob-num js-line-number" data-line-number="1963"></td>
        <td id="LC1963" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indx, len, names, widget, time,</td>
      </tr>
      <tr>
        <td id="L1964" class="blob-num js-line-number" data-line-number="1964"></td>
        <td id="LC1964" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L1965" class="blob-num js-line-number" data-line-number="1965"></td>
        <td id="LC1965" class="blob-code blob-code-inner js-file-line">				widgets <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L1966" class="blob-num js-line-number" data-line-number="1966"></td>
        <td id="LC1966" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// prevent numerous consecutive widget applications</span></td>
      </tr>
      <tr>
        <td id="L1967" class="blob-num js-line-number" data-line-number="1967"></td>
        <td id="LC1967" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( init <span class="pl-k">!==</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> <span class="pl-k">&amp;&amp;</span> ( <span class="pl-smi">table</span>.<span class="pl-smi">isApplyingWidgets</span> <span class="pl-k">||</span> <span class="pl-smi">table</span>.<span class="pl-smi">isUpdating</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L1968" class="blob-num js-line-number" data-line-number="1968"></td>
        <td id="LC1968" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1969" class="blob-num js-line-number" data-line-number="1969"></td>
        <td id="LC1969" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1970" class="blob-num js-line-number" data-line-number="1970"></td>
        <td id="LC1970" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) { time <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(); }</td>
      </tr>
      <tr>
        <td id="L1971" class="blob-num js-line-number" data-line-number="1971"></td>
        <td id="LC1971" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">addWidgetFromClass</span>( table );</td>
      </tr>
      <tr>
        <td id="L1972" class="blob-num js-line-number" data-line-number="1972"></td>
        <td id="LC1972" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// prevent &quot;tablesorter-ready&quot; from firing multiple times in a row</span></td>
      </tr>
      <tr>
        <td id="L1973" class="blob-num js-line-number" data-line-number="1973"></td>
        <td id="LC1973" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">clearTimeout</span>( <span class="pl-smi">c</span>.<span class="pl-smi">timerReady</span> );</td>
      </tr>
      <tr>
        <td id="L1974" class="blob-num js-line-number" data-line-number="1974"></td>
        <td id="LC1974" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L1975" class="blob-num js-line-number" data-line-number="1975"></td>
        <td id="LC1975" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">table</span>.<span class="pl-smi">isApplyingWidgets</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1976" class="blob-num js-line-number" data-line-number="1976"></td>
        <td id="LC1976" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// ensure unique widget ids</span></td>
      </tr>
      <tr>
        <td id="L1977" class="blob-num js-line-number" data-line-number="1977"></td>
        <td id="LC1977" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">widgets</span> <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">grep</span>( <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>, <span class="pl-k">function</span>( <span class="pl-smi">val</span>, <span class="pl-smi">index</span> ) {</td>
      </tr>
      <tr>
        <td id="L1978" class="blob-num js-line-number" data-line-number="1978"></td>
        <td id="LC1978" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( val, <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span> ) <span class="pl-k">===</span> index;</td>
      </tr>
      <tr>
        <td id="L1979" class="blob-num js-line-number" data-line-number="1979"></td>
        <td id="LC1979" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L1980" class="blob-num js-line-number" data-line-number="1980"></td>
        <td id="LC1980" class="blob-code blob-code-inner js-file-line">				names <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span> <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L1981" class="blob-num js-line-number" data-line-number="1981"></td>
        <td id="LC1981" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">names</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1982" class="blob-num js-line-number" data-line-number="1982"></td>
        <td id="LC1982" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// build widget array &amp; add priority as needed</span></td>
      </tr>
      <tr>
        <td id="L1983" class="blob-num js-line-number" data-line-number="1983"></td>
        <td id="LC1983" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L1984" class="blob-num js-line-number" data-line-number="1984"></td>
        <td id="LC1984" class="blob-code blob-code-inner js-file-line">					widget <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getWidgetById</span>( names[ indx ] );</td>
      </tr>
      <tr>
        <td id="L1985" class="blob-num js-line-number" data-line-number="1985"></td>
        <td id="LC1985" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( widget <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> ) {</td>
      </tr>
      <tr>
        <td id="L1986" class="blob-num js-line-number" data-line-number="1986"></td>
        <td id="LC1986" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// set priority to 10 if not defined</span></td>
      </tr>
      <tr>
        <td id="L1987" class="blob-num js-line-number" data-line-number="1987"></td>
        <td id="LC1987" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">widget</span>.<span class="pl-smi">priority</span> ) { <span class="pl-smi">widget</span>.<span class="pl-smi">priority</span> <span class="pl-k">=</span> <span class="pl-c1">10</span>; }</td>
      </tr>
      <tr>
        <td id="L1988" class="blob-num js-line-number" data-line-number="1988"></td>
        <td id="LC1988" class="blob-code blob-code-inner js-file-line">						widgets[ indx ] <span class="pl-k">=</span> widget;</td>
      </tr>
      <tr>
        <td id="L1989" class="blob-num js-line-number" data-line-number="1989"></td>
        <td id="LC1989" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L1990" class="blob-num js-line-number" data-line-number="1990"></td>
        <td id="LC1990" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>.<span class="pl-c1">warn</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> names[ indx ] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; widget code does not exist!<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L1991" class="blob-num js-line-number" data-line-number="1991"></td>
        <td id="LC1991" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1992" class="blob-num js-line-number" data-line-number="1992"></td>
        <td id="LC1992" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1993" class="blob-num js-line-number" data-line-number="1993"></td>
        <td id="LC1993" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// sort widgets by priority</span></td>
      </tr>
      <tr>
        <td id="L1994" class="blob-num js-line-number" data-line-number="1994"></td>
        <td id="LC1994" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">widgets</span>.<span class="pl-c1">sort</span>( <span class="pl-k">function</span>( <span class="pl-smi">a</span>, <span class="pl-smi">b</span> ) {</td>
      </tr>
      <tr>
        <td id="L1995" class="blob-num js-line-number" data-line-number="1995"></td>
        <td id="LC1995" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">a</span>.<span class="pl-smi">priority</span> <span class="pl-k">&lt;</span> <span class="pl-smi">b</span>.<span class="pl-smi">priority</span> <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-smi">a</span>.<span class="pl-smi">priority</span> <span class="pl-k">===</span> <span class="pl-smi">b</span>.<span class="pl-smi">priority</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1996" class="blob-num js-line-number" data-line-number="1996"></td>
        <td id="LC1996" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L1997" class="blob-num js-line-number" data-line-number="1997"></td>
        <td id="LC1997" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// add/update selected widgets</span></td>
      </tr>
      <tr>
        <td id="L1998" class="blob-num js-line-number" data-line-number="1998"></td>
        <td id="LC1998" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">widgets</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L1999" class="blob-num js-line-number" data-line-number="1999"></td>
        <td id="LC1999" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L2000" class="blob-num js-line-number" data-line-number="2000"></td>
        <td id="LC2000" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>[ <span class="pl-en">console</span>.<span class="pl-smi">group</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>group<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>log<span class="pl-pds">&#39;</span></span> ]( <span class="pl-s"><span class="pl-pds">&#39;</span>Start <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( init <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>initializing<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>applying<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> widgets<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2001" class="blob-num js-line-number" data-line-number="2001"></td>
        <td id="LC2001" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2002" class="blob-num js-line-number" data-line-number="2002"></td>
        <td id="LC2002" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2003" class="blob-num js-line-number" data-line-number="2003"></td>
        <td id="LC2003" class="blob-code blob-code-inner js-file-line">					widget <span class="pl-k">=</span> widgets[ indx ];</td>
      </tr>
      <tr>
        <td id="L2004" class="blob-num js-line-number" data-line-number="2004"></td>
        <td id="LC2004" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( widget <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> ) {</td>
      </tr>
      <tr>
        <td id="L2005" class="blob-num js-line-number" data-line-number="2005"></td>
        <td id="LC2005" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">ts</span>.<span class="pl-en">applyWidgetId</span>( table, <span class="pl-smi">widget</span>.<span class="pl-c1">id</span>, init );</td>
      </tr>
      <tr>
        <td id="L2006" class="blob-num js-line-number" data-line-number="2006"></td>
        <td id="LC2006" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2007" class="blob-num js-line-number" data-line-number="2007"></td>
        <td id="LC2007" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2008" class="blob-num js-line-number" data-line-number="2008"></td>
        <td id="LC2008" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">console</span>.<span class="pl-smi">groupEnd</span> ) { <span class="pl-en">console</span>.<span class="pl-en">groupEnd</span>(); }</td>
      </tr>
      <tr>
        <td id="L2009" class="blob-num js-line-number" data-line-number="2009"></td>
        <td id="LC2009" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// callback executed on init only</span></td>
      </tr>
      <tr>
        <td id="L2010" class="blob-num js-line-number" data-line-number="2010"></td>
        <td id="LC2010" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">!</span>init <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2011" class="blob-num js-line-number" data-line-number="2011"></td>
        <td id="LC2011" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">callback</span>( table );</td>
      </tr>
      <tr>
        <td id="L2012" class="blob-num js-line-number" data-line-number="2012"></td>
        <td id="LC2012" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2013" class="blob-num js-line-number" data-line-number="2013"></td>
        <td id="LC2013" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2014" class="blob-num js-line-number" data-line-number="2014"></td>
        <td id="LC2014" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">timerReady</span> <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>( <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2015" class="blob-num js-line-number" data-line-number="2015"></td>
        <td id="LC2015" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">table</span>.<span class="pl-smi">isApplyingWidgets</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2016" class="blob-num js-line-number" data-line-number="2016"></td>
        <td id="LC2016" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$</span>.<span class="pl-c1">data</span>( table, <span class="pl-s"><span class="pl-pds">&#39;</span>lastWidgetApplication<span class="pl-pds">&#39;</span></span>, <span class="pl-k">new</span> <span class="pl-en">Date</span>() );</td>
      </tr>
      <tr>
        <td id="L2017" class="blob-num js-line-number" data-line-number="2017"></td>
        <td id="LC2017" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter-ready<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2018" class="blob-num js-line-number" data-line-number="2018"></td>
        <td id="LC2018" class="blob-code blob-code-inner js-file-line">			}, <span class="pl-c1">10</span> );</td>
      </tr>
      <tr>
        <td id="L2019" class="blob-num js-line-number" data-line-number="2019"></td>
        <td id="LC2019" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L2020" class="blob-num js-line-number" data-line-number="2020"></td>
        <td id="LC2020" class="blob-code blob-code-inner js-file-line">				widget <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L2021" class="blob-num js-line-number" data-line-number="2021"></td>
        <td id="LC2021" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>Completed <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L2022" class="blob-num js-line-number" data-line-number="2022"></td>
        <td id="LC2022" class="blob-code blob-code-inner js-file-line">					( init <span class="pl-k">===</span> <span class="pl-c1">true</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>initializing <span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>applying <span class="pl-pds">&#39;</span></span> ) <span class="pl-k">+</span> widget <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L2023" class="blob-num js-line-number" data-line-number="2023"></td>
        <td id="LC2023" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&#39;</span> widget<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( widget <span class="pl-k">!==</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>s<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ) <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-en">benchmark</span>( time ) );</td>
      </tr>
      <tr>
        <td id="L2024" class="blob-num js-line-number" data-line-number="2024"></td>
        <td id="LC2024" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2025" class="blob-num js-line-number" data-line-number="2025"></td>
        <td id="LC2025" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2026" class="blob-num js-line-number" data-line-number="2026"></td>
        <td id="LC2026" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2027" class="blob-num js-line-number" data-line-number="2027"></td>
        <td id="LC2027" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">removeWidget</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">name</span>, <span class="pl-smi">refreshing</span> ) {</td>
      </tr>
      <tr>
        <td id="L2028" class="blob-num js-line-number" data-line-number="2028"></td>
        <td id="LC2028" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L2029" class="blob-num js-line-number" data-line-number="2029"></td>
        <td id="LC2029" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> index, widget, indx, len,</td>
      </tr>
      <tr>
        <td id="L2030" class="blob-num js-line-number" data-line-number="2030"></td>
        <td id="LC2030" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>;</td>
      </tr>
      <tr>
        <td id="L2031" class="blob-num js-line-number" data-line-number="2031"></td>
        <td id="LC2031" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// if name === true, add all widgets from $.tablesorter.widgets</span></td>
      </tr>
      <tr>
        <td id="L2032" class="blob-num js-line-number" data-line-number="2032"></td>
        <td id="LC2032" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( name <span class="pl-k">===</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L2033" class="blob-num js-line-number" data-line-number="2033"></td>
        <td id="LC2033" class="blob-code blob-code-inner js-file-line">				name <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2034" class="blob-num js-line-number" data-line-number="2034"></td>
        <td id="LC2034" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L2035" class="blob-num js-line-number" data-line-number="2035"></td>
        <td id="LC2035" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2036" class="blob-num js-line-number" data-line-number="2036"></td>
        <td id="LC2036" class="blob-code blob-code-inner js-file-line">					widget <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">widgets</span>[ indx ];</td>
      </tr>
      <tr>
        <td id="L2037" class="blob-num js-line-number" data-line-number="2037"></td>
        <td id="LC2037" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( widget <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> ) {</td>
      </tr>
      <tr>
        <td id="L2038" class="blob-num js-line-number" data-line-number="2038"></td>
        <td id="LC2038" class="blob-code blob-code-inner js-file-line">						name[ <span class="pl-smi">name</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L2039" class="blob-num js-line-number" data-line-number="2039"></td>
        <td id="LC2039" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2040" class="blob-num js-line-number" data-line-number="2040"></td>
        <td id="LC2040" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2041" class="blob-num js-line-number" data-line-number="2041"></td>
        <td id="LC2041" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2042" class="blob-num js-line-number" data-line-number="2042"></td>
        <td id="LC2042" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// name can be either an array of widgets names,</span></td>
      </tr>
      <tr>
        <td id="L2043" class="blob-num js-line-number" data-line-number="2043"></td>
        <td id="LC2043" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// or a space/comma separated list of widget names</span></td>
      </tr>
      <tr>
        <td id="L2044" class="blob-num js-line-number" data-line-number="2044"></td>
        <td id="LC2044" class="blob-code blob-code-inner js-file-line">				name <span class="pl-k">=</span> ( <span class="pl-smi">$</span>.<span class="pl-en">isArray</span>( name ) <span class="pl-k">?</span> <span class="pl-smi">name</span>.<span class="pl-c1">join</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">:</span> name <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">toLowerCase</span>().<span class="pl-c1">split</span>(<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\s</span>,]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span> );</td>
      </tr>
      <tr>
        <td id="L2045" class="blob-num js-line-number" data-line-number="2045"></td>
        <td id="LC2045" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2046" class="blob-num js-line-number" data-line-number="2046"></td>
        <td id="LC2046" class="blob-code blob-code-inner js-file-line">			len <span class="pl-k">=</span> <span class="pl-smi">name</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L2047" class="blob-num js-line-number" data-line-number="2047"></td>
        <td id="LC2047" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> len; index<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2048" class="blob-num js-line-number" data-line-number="2048"></td>
        <td id="LC2048" class="blob-code blob-code-inner js-file-line">				widget <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">getWidgetById</span>( name[ index ] );</td>
      </tr>
      <tr>
        <td id="L2049" class="blob-num js-line-number" data-line-number="2049"></td>
        <td id="LC2049" class="blob-code blob-code-inner js-file-line">				indx <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( name[ index ], <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span> );</td>
      </tr>
      <tr>
        <td id="L2050" class="blob-num js-line-number" data-line-number="2050"></td>
        <td id="LC2050" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// don&#39;t remove the widget from config.widget if refreshing</span></td>
      </tr>
      <tr>
        <td id="L2051" class="blob-num js-line-number" data-line-number="2051"></td>
        <td id="LC2051" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( indx <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> refreshing <span class="pl-k">!==</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L2052" class="blob-num js-line-number" data-line-number="2052"></td>
        <td id="LC2052" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>.<span class="pl-c1">splice</span>( indx, <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L2053" class="blob-num js-line-number" data-line-number="2053"></td>
        <td id="LC2053" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2054" class="blob-num js-line-number" data-line-number="2054"></td>
        <td id="LC2054" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( widget <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-smi">remove</span> ) {</td>
      </tr>
      <tr>
        <td id="L2055" class="blob-num js-line-number" data-line-number="2055"></td>
        <td id="LC2055" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">debug</span> ) {</td>
      </tr>
      <tr>
        <td id="L2056" class="blob-num js-line-number" data-line-number="2056"></td>
        <td id="LC2056" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>.<span class="pl-c1">log</span>( ( refreshing <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Refreshing<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Removing<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> &quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name[ index ] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; widget<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2057" class="blob-num js-line-number" data-line-number="2057"></td>
        <td id="LC2057" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2058" class="blob-num js-line-number" data-line-number="2058"></td>
        <td id="LC2058" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">widget</span>.<span class="pl-en">remove</span>( table, c, <span class="pl-smi">c</span>.<span class="pl-smi">widgetOptions</span>, refreshing );</td>
      </tr>
      <tr>
        <td id="L2059" class="blob-num js-line-number" data-line-number="2059"></td>
        <td id="LC2059" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">c</span>.<span class="pl-smi">widgetInit</span>[ name[ index ] ] <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2060" class="blob-num js-line-number" data-line-number="2060"></td>
        <td id="LC2060" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2061" class="blob-num js-line-number" data-line-number="2061"></td>
        <td id="LC2061" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2062" class="blob-num js-line-number" data-line-number="2062"></td>
        <td id="LC2062" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2063" class="blob-num js-line-number" data-line-number="2063"></td>
        <td id="LC2063" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2064" class="blob-num js-line-number" data-line-number="2064"></td>
        <td id="LC2064" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">refreshWidgets</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">doAll</span>, <span class="pl-smi">dontapply</span> ) {</td>
      </tr>
      <tr>
        <td id="L2065" class="blob-num js-line-number" data-line-number="2065"></td>
        <td id="LC2065" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ]; <span class="pl-c">// see issue #243</span></td>
      </tr>
      <tr>
        <td id="L2066" class="blob-num js-line-number" data-line-number="2066"></td>
        <td id="LC2066" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indx, widget,</td>
      </tr>
      <tr>
        <td id="L2067" class="blob-num js-line-number" data-line-number="2067"></td>
        <td id="LC2067" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2068" class="blob-num js-line-number" data-line-number="2068"></td>
        <td id="LC2068" class="blob-code blob-code-inner js-file-line">				curWidgets <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span>,</td>
      </tr>
      <tr>
        <td id="L2069" class="blob-num js-line-number" data-line-number="2069"></td>
        <td id="LC2069" class="blob-code blob-code-inner js-file-line">				widgets <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">widgets</span>,</td>
      </tr>
      <tr>
        <td id="L2070" class="blob-num js-line-number" data-line-number="2070"></td>
        <td id="LC2070" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">widgets</span>.<span class="pl-c1">length</span>,</td>
      </tr>
      <tr>
        <td id="L2071" class="blob-num js-line-number" data-line-number="2071"></td>
        <td id="LC2071" class="blob-code blob-code-inner js-file-line">				list <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L2072" class="blob-num js-line-number" data-line-number="2072"></td>
        <td id="LC2072" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2073" class="blob-num js-line-number" data-line-number="2073"></td>
        <td id="LC2073" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">$</span>( table ).<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>refreshComplete<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2074" class="blob-num js-line-number" data-line-number="2074"></td>
        <td id="LC2074" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L2075" class="blob-num js-line-number" data-line-number="2075"></td>
        <td id="LC2075" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// remove widgets not defined in config.widgets, unless doAll is true</span></td>
      </tr>
      <tr>
        <td id="L2076" class="blob-num js-line-number" data-line-number="2076"></td>
        <td id="LC2076" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2077" class="blob-num js-line-number" data-line-number="2077"></td>
        <td id="LC2077" class="blob-code blob-code-inner js-file-line">				widget <span class="pl-k">=</span> widgets[ indx ];</td>
      </tr>
      <tr>
        <td id="L2078" class="blob-num js-line-number" data-line-number="2078"></td>
        <td id="LC2078" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( widget <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span> <span class="pl-k">&amp;&amp;</span> ( doAll <span class="pl-k">||</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( <span class="pl-smi">widget</span>.<span class="pl-c1">id</span>, curWidgets ) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L2079" class="blob-num js-line-number" data-line-number="2079"></td>
        <td id="LC2079" class="blob-code blob-code-inner js-file-line">					list[ <span class="pl-smi">list</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> <span class="pl-smi">widget</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L2080" class="blob-num js-line-number" data-line-number="2080"></td>
        <td id="LC2080" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2081" class="blob-num js-line-number" data-line-number="2081"></td>
        <td id="LC2081" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2082" class="blob-num js-line-number" data-line-number="2082"></td>
        <td id="LC2082" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">removeWidget</span>( table, <span class="pl-smi">list</span>.<span class="pl-c1">join</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span> ), <span class="pl-c1">true</span> );</td>
      </tr>
      <tr>
        <td id="L2083" class="blob-num js-line-number" data-line-number="2083"></td>
        <td id="LC2083" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( dontapply <span class="pl-k">!==</span> <span class="pl-c1">true</span> ) {</td>
      </tr>
      <tr>
        <td id="L2084" class="blob-num js-line-number" data-line-number="2084"></td>
        <td id="LC2084" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// call widget init if</span></td>
      </tr>
      <tr>
        <td id="L2085" class="blob-num js-line-number" data-line-number="2085"></td>
        <td id="LC2085" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( table, doAll <span class="pl-k">||</span> <span class="pl-c1">false</span>, callback );</td>
      </tr>
      <tr>
        <td id="L2086" class="blob-num js-line-number" data-line-number="2086"></td>
        <td id="LC2086" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( doAll ) {</td>
      </tr>
      <tr>
        <td id="L2087" class="blob-num js-line-number" data-line-number="2087"></td>
        <td id="LC2087" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// apply widget format</span></td>
      </tr>
      <tr>
        <td id="L2088" class="blob-num js-line-number" data-line-number="2088"></td>
        <td id="LC2088" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ts</span>.<span class="pl-en">applyWidget</span>( table, <span class="pl-c1">false</span>, callback );</td>
      </tr>
      <tr>
        <td id="L2089" class="blob-num js-line-number" data-line-number="2089"></td>
        <td id="LC2089" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2090" class="blob-num js-line-number" data-line-number="2090"></td>
        <td id="LC2090" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2091" class="blob-num js-line-number" data-line-number="2091"></td>
        <td id="LC2091" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>( table );</td>
      </tr>
      <tr>
        <td id="L2092" class="blob-num js-line-number" data-line-number="2092"></td>
        <td id="LC2092" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2093" class="blob-num js-line-number" data-line-number="2093"></td>
        <td id="LC2093" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2094" class="blob-num js-line-number" data-line-number="2094"></td>
        <td id="LC2094" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2095" class="blob-num js-line-number" data-line-number="2095"></td>
        <td id="LC2095" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2096" class="blob-num js-line-number" data-line-number="2096"></td>
        <td id="LC2096" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ██ ██████ ██ ██     ██ ██████ ██ ██████ ▄█████</span></td>
      </tr>
      <tr>
        <td id="L2097" class="blob-num js-line-number" data-line-number="2097"></td>
        <td id="LC2097" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ██   ██   ██ ██     ██   ██   ██ ██▄▄   ▀█▄</span></td>
      </tr>
      <tr>
        <td id="L2098" class="blob-num js-line-number" data-line-number="2098"></td>
        <td id="LC2098" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██  ██   ██   ██ ██     ██   ██   ██ ██▀▀      ▀█▄</span></td>
      </tr>
      <tr>
        <td id="L2099" class="blob-num js-line-number" data-line-number="2099"></td>
        <td id="LC2099" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▀████▀   ██   ██ ██████ ██   ██   ██ ██████ █████▀</span></td>
      </tr>
      <tr>
        <td id="L2100" class="blob-num js-line-number" data-line-number="2100"></td>
        <td id="LC2100" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L2101" class="blob-num js-line-number" data-line-number="2101"></td>
        <td id="LC2101" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">benchmark</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">diff</span> ) {</td>
      </tr>
      <tr>
        <td id="L2102" class="blob-num js-line-number" data-line-number="2102"></td>
        <td id="LC2102" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> ( <span class="pl-s"><span class="pl-pds">&#39;</span> ( <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>() <span class="pl-k">-</span> <span class="pl-smi">diff</span>.<span class="pl-c1">getTime</span>() ) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ms )<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2103" class="blob-num js-line-number" data-line-number="2103"></td>
        <td id="LC2103" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2104" class="blob-num js-line-number" data-line-number="2104"></td>
        <td id="LC2104" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// deprecated ts.log</span></td>
      </tr>
      <tr>
        <td id="L2105" class="blob-num js-line-number" data-line-number="2105"></td>
        <td id="LC2105" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">log</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2106" class="blob-num js-line-number" data-line-number="2106"></td>
        <td id="LC2106" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-v">arguments</span> );</td>
      </tr>
      <tr>
        <td id="L2107" class="blob-num js-line-number" data-line-number="2107"></td>
        <td id="LC2107" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2108" class="blob-num js-line-number" data-line-number="2108"></td>
        <td id="LC2108" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2109" class="blob-num js-line-number" data-line-number="2109"></td>
        <td id="LC2109" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// $.isEmptyObject from jQuery v1.4</span></td>
      </tr>
      <tr>
        <td id="L2110" class="blob-num js-line-number" data-line-number="2110"></td>
        <td id="LC2110" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">isEmptyObject</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">obj</span> ) {</td>
      </tr>
      <tr>
        <td id="L2111" class="blob-num js-line-number" data-line-number="2111"></td>
        <td id="LC2111" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*jshint forin: false */</span></td>
      </tr>
      <tr>
        <td id="L2112" class="blob-num js-line-number" data-line-number="2112"></td>
        <td id="LC2112" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( <span class="pl-k">var</span> name <span class="pl-k">in</span> obj ) {</td>
      </tr>
      <tr>
        <td id="L2113" class="blob-num js-line-number" data-line-number="2113"></td>
        <td id="LC2113" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2114" class="blob-num js-line-number" data-line-number="2114"></td>
        <td id="LC2114" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2115" class="blob-num js-line-number" data-line-number="2115"></td>
        <td id="LC2115" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L2116" class="blob-num js-line-number" data-line-number="2116"></td>
        <td id="LC2116" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2117" class="blob-num js-line-number" data-line-number="2117"></td>
        <td id="LC2117" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2118" class="blob-num js-line-number" data-line-number="2118"></td>
        <td id="LC2118" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">isValueInArray</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">column</span>, <span class="pl-smi">arry</span> ) {</td>
      </tr>
      <tr>
        <td id="L2119" class="blob-num js-line-number" data-line-number="2119"></td>
        <td id="LC2119" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> indx,</td>
      </tr>
      <tr>
        <td id="L2120" class="blob-num js-line-number" data-line-number="2120"></td>
        <td id="LC2120" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> arry <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">arry</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2121" class="blob-num js-line-number" data-line-number="2121"></td>
        <td id="LC2121" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( indx <span class="pl-k">=</span> <span class="pl-c1">0</span>; indx <span class="pl-k">&lt;</span> len; indx<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2122" class="blob-num js-line-number" data-line-number="2122"></td>
        <td id="LC2122" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( arry[ indx ][ <span class="pl-c1">0</span> ] <span class="pl-k">===</span> column ) {</td>
      </tr>
      <tr>
        <td id="L2123" class="blob-num js-line-number" data-line-number="2123"></td>
        <td id="LC2123" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> indx;</td>
      </tr>
      <tr>
        <td id="L2124" class="blob-num js-line-number" data-line-number="2124"></td>
        <td id="LC2124" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2125" class="blob-num js-line-number" data-line-number="2125"></td>
        <td id="LC2125" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2126" class="blob-num js-line-number" data-line-number="2126"></td>
        <td id="LC2126" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L2127" class="blob-num js-line-number" data-line-number="2127"></td>
        <td id="LC2127" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2128" class="blob-num js-line-number" data-line-number="2128"></td>
        <td id="LC2128" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2129" class="blob-num js-line-number" data-line-number="2129"></td>
        <td id="LC2129" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">formatFloat</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2130" class="blob-num js-line-number" data-line-number="2130"></td>
        <td id="LC2130" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> str <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> str <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ) { <span class="pl-k">return</span> str; }</td>
      </tr>
      <tr>
        <td id="L2131" class="blob-num js-line-number" data-line-number="2131"></td>
        <td id="LC2131" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// allow using formatFloat without a table; defaults to US number format</span></td>
      </tr>
      <tr>
        <td id="L2132" class="blob-num js-line-number" data-line-number="2132"></td>
        <td id="LC2132" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> num,</td>
      </tr>
      <tr>
        <td id="L2133" class="blob-num js-line-number" data-line-number="2133"></td>
        <td id="LC2133" class="blob-code blob-code-inner js-file-line">				usFormat <span class="pl-k">=</span> table <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span> <span class="pl-k">?</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>.<span class="pl-smi">usNumberFormat</span> <span class="pl-k">!==</span> false <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2134" class="blob-num js-line-number" data-line-number="2134"></td>
        <td id="LC2134" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">typeof</span> table <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> table <span class="pl-k">:</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L2135" class="blob-num js-line-number" data-line-number="2135"></td>
        <td id="LC2135" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( usFormat ) {</td>
      </tr>
      <tr>
        <td id="L2136" class="blob-num js-line-number" data-line-number="2136"></td>
        <td id="LC2136" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// US Format - 1,234,567.89 -&gt; 1234567.89</span></td>
      </tr>
      <tr>
        <td id="L2137" class="blob-num js-line-number" data-line-number="2137"></td>
        <td id="LC2137" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">comma</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2138" class="blob-num js-line-number" data-line-number="2138"></td>
        <td id="LC2138" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2139" class="blob-num js-line-number" data-line-number="2139"></td>
        <td id="LC2139" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// German Format = 1.234.567,89 -&gt; 1234567.89</span></td>
      </tr>
      <tr>
        <td id="L2140" class="blob-num js-line-number" data-line-number="2140"></td>
        <td id="LC2140" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// French Format = 1 234 567,89 -&gt; 1234567.89</span></td>
      </tr>
      <tr>
        <td id="L2141" class="blob-num js-line-number" data-line-number="2141"></td>
        <td id="LC2141" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">digitNonUS</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">comma</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2142" class="blob-num js-line-number" data-line-number="2142"></td>
        <td id="LC2142" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2143" class="blob-num js-line-number" data-line-number="2143"></td>
        <td id="LC2143" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">digitNegativeTest</span>.<span class="pl-c1">test</span>( str ) ) {</td>
      </tr>
      <tr>
        <td id="L2144" class="blob-num js-line-number" data-line-number="2144"></td>
        <td id="LC2144" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// make (#) into a negative number -&gt; (10) = -10</span></td>
      </tr>
      <tr>
        <td id="L2145" class="blob-num js-line-number" data-line-number="2145"></td>
        <td id="LC2145" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">digitNegativeReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>-$1<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2146" class="blob-num js-line-number" data-line-number="2146"></td>
        <td id="LC2146" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2147" class="blob-num js-line-number" data-line-number="2147"></td>
        <td id="LC2147" class="blob-code blob-code-inner js-file-line">			num <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>( str );</td>
      </tr>
      <tr>
        <td id="L2148" class="blob-num js-line-number" data-line-number="2148"></td>
        <td id="LC2148" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// return the text instead of zero</span></td>
      </tr>
      <tr>
        <td id="L2149" class="blob-num js-line-number" data-line-number="2149"></td>
        <td id="LC2149" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">isNaN</span>( num ) <span class="pl-k">?</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( str ) <span class="pl-k">:</span> num;</td>
      </tr>
      <tr>
        <td id="L2150" class="blob-num js-line-number" data-line-number="2150"></td>
        <td id="LC2150" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2151" class="blob-num js-line-number" data-line-number="2151"></td>
        <td id="LC2151" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2152" class="blob-num js-line-number" data-line-number="2152"></td>
        <td id="LC2152" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">isDigit</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2153" class="blob-num js-line-number" data-line-number="2153"></td>
        <td id="LC2153" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// replace all unwanted chars and match</span></td>
      </tr>
      <tr>
        <td id="L2154" class="blob-num js-line-number" data-line-number="2154"></td>
        <td id="LC2154" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">isNaN</span>( str ) <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L2155" class="blob-num js-line-number" data-line-number="2155"></td>
        <td id="LC2155" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">digitTest</span>.<span class="pl-c1">test</span>( <span class="pl-smi">str</span>.<span class="pl-c1">toString</span>().<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">digitReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ) ) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2156" class="blob-num js-line-number" data-line-number="2156"></td>
        <td id="LC2156" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2157" class="blob-num js-line-number" data-line-number="2157"></td>
        <td id="LC2157" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2158" class="blob-num js-line-number" data-line-number="2158"></td>
        <td id="LC2158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2159" class="blob-num js-line-number" data-line-number="2159"></td>
        <td id="LC2159" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// computeTableHeaderCellIndexes from:</span></td>
      </tr>
      <tr>
        <td id="L2160" class="blob-num js-line-number" data-line-number="2160"></td>
        <td id="LC2160" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// http://www.javascripttoolbox.com/lib/table/examples.php</span></td>
      </tr>
      <tr>
        <td id="L2161" class="blob-num js-line-number" data-line-number="2161"></td>
        <td id="LC2161" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// http://www.javascripttoolbox.com/temp/table_cellindex.html</span></td>
      </tr>
      <tr>
        <td id="L2162" class="blob-num js-line-number" data-line-number="2162"></td>
        <td id="LC2162" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">computeColumnIndex</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">$rows</span>, <span class="pl-smi">c</span> ) {</td>
      </tr>
      <tr>
        <td id="L2163" class="blob-num js-line-number" data-line-number="2163"></td>
        <td id="LC2163" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> i, j, k, l, cell, cells, rowIndex, rowSpan, colSpan, firstAvailCol,</td>
      </tr>
      <tr>
        <td id="L2164" class="blob-num js-line-number" data-line-number="2164"></td>
        <td id="LC2164" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// total columns has been calculated, use it to set the matrixrow</span></td>
      </tr>
      <tr>
        <td id="L2165" class="blob-num js-line-number" data-line-number="2165"></td>
        <td id="LC2165" class="blob-code blob-code-inner js-file-line">				columns <span class="pl-k">=</span> c <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">columns</span> <span class="pl-k">||</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L2166" class="blob-num js-line-number" data-line-number="2166"></td>
        <td id="LC2166" class="blob-code blob-code-inner js-file-line">				matrix <span class="pl-k">=</span> [],</td>
      </tr>
      <tr>
        <td id="L2167" class="blob-num js-line-number" data-line-number="2167"></td>
        <td id="LC2167" class="blob-code blob-code-inner js-file-line">				matrixrow <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>( columns );</td>
      </tr>
      <tr>
        <td id="L2168" class="blob-num js-line-number" data-line-number="2168"></td>
        <td id="LC2168" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">$rows</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2169" class="blob-num js-line-number" data-line-number="2169"></td>
        <td id="LC2169" class="blob-code blob-code-inner js-file-line">				cells <span class="pl-k">=</span> $rows[ i ].<span class="pl-c1">cells</span>;</td>
      </tr>
      <tr>
        <td id="L2170" class="blob-num js-line-number" data-line-number="2170"></td>
        <td id="LC2170" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> <span class="pl-smi">cells</span>.<span class="pl-c1">length</span>; j<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2171" class="blob-num js-line-number" data-line-number="2171"></td>
        <td id="LC2171" class="blob-code blob-code-inner js-file-line">					cell <span class="pl-k">=</span> cells[ j ];</td>
      </tr>
      <tr>
        <td id="L2172" class="blob-num js-line-number" data-line-number="2172"></td>
        <td id="LC2172" class="blob-code blob-code-inner js-file-line">					rowIndex <span class="pl-k">=</span> <span class="pl-smi">cell</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">rowIndex</span>;</td>
      </tr>
      <tr>
        <td id="L2173" class="blob-num js-line-number" data-line-number="2173"></td>
        <td id="LC2173" class="blob-code blob-code-inner js-file-line">					rowSpan <span class="pl-k">=</span> <span class="pl-smi">cell</span>.<span class="pl-c1">rowSpan</span> <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L2174" class="blob-num js-line-number" data-line-number="2174"></td>
        <td id="LC2174" class="blob-code blob-code-inner js-file-line">					colSpan <span class="pl-k">=</span> <span class="pl-smi">cell</span>.<span class="pl-c1">colSpan</span> <span class="pl-k">||</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L2175" class="blob-num js-line-number" data-line-number="2175"></td>
        <td id="LC2175" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> matrix[ rowIndex ] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2176" class="blob-num js-line-number" data-line-number="2176"></td>
        <td id="LC2176" class="blob-code blob-code-inner js-file-line">						matrix[ rowIndex ] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2177" class="blob-num js-line-number" data-line-number="2177"></td>
        <td id="LC2177" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2178" class="blob-num js-line-number" data-line-number="2178"></td>
        <td id="LC2178" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Find first available column in the first row</span></td>
      </tr>
      <tr>
        <td id="L2179" class="blob-num js-line-number" data-line-number="2179"></td>
        <td id="LC2179" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( k <span class="pl-k">=</span> <span class="pl-c1">0</span>; k <span class="pl-k">&lt;</span> matrix[ rowIndex ].<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>; k<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2180" class="blob-num js-line-number" data-line-number="2180"></td>
        <td id="LC2180" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> matrix[ rowIndex ][ k ] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2181" class="blob-num js-line-number" data-line-number="2181"></td>
        <td id="LC2181" class="blob-code blob-code-inner js-file-line">							firstAvailCol <span class="pl-k">=</span> k;</td>
      </tr>
      <tr>
        <td id="L2182" class="blob-num js-line-number" data-line-number="2182"></td>
        <td id="LC2182" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L2183" class="blob-num js-line-number" data-line-number="2183"></td>
        <td id="LC2183" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L2184" class="blob-num js-line-number" data-line-number="2184"></td>
        <td id="LC2184" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2185" class="blob-num js-line-number" data-line-number="2185"></td>
        <td id="LC2185" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// jscs:disable disallowEmptyBlocks</span></td>
      </tr>
      <tr>
        <td id="L2186" class="blob-num js-line-number" data-line-number="2186"></td>
        <td id="LC2186" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( columns <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cell</span>.<span class="pl-smi">cellIndex</span> <span class="pl-k">===</span> firstAvailCol ) {</td>
      </tr>
      <tr>
        <td id="L2187" class="blob-num js-line-number" data-line-number="2187"></td>
        <td id="LC2187" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// don&#39;t to anything</span></td>
      </tr>
      <tr>
        <td id="L2188" class="blob-num js-line-number" data-line-number="2188"></td>
        <td id="LC2188" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> ( <span class="pl-smi">cell</span>.<span class="pl-smi">setAttribute</span> ) {</td>
      </tr>
      <tr>
        <td id="L2189" class="blob-num js-line-number" data-line-number="2189"></td>
        <td id="LC2189" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// jscs:enable disallowEmptyBlocks</span></td>
      </tr>
      <tr>
        <td id="L2190" class="blob-num js-line-number" data-line-number="2190"></td>
        <td id="LC2190" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// add data-column (setAttribute = IE8+)</span></td>
      </tr>
      <tr>
        <td id="L2191" class="blob-num js-line-number" data-line-number="2191"></td>
        <td id="LC2191" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">cell</span>.<span class="pl-c1">setAttribute</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span>, firstAvailCol );</td>
      </tr>
      <tr>
        <td id="L2192" class="blob-num js-line-number" data-line-number="2192"></td>
        <td id="LC2192" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2193" class="blob-num js-line-number" data-line-number="2193"></td>
        <td id="LC2193" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// remove once we drop support for IE7 - 1/12/2016</span></td>
      </tr>
      <tr>
        <td id="L2194" class="blob-num js-line-number" data-line-number="2194"></td>
        <td id="LC2194" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">$</span>( cell ).<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span>, firstAvailCol );</td>
      </tr>
      <tr>
        <td id="L2195" class="blob-num js-line-number" data-line-number="2195"></td>
        <td id="LC2195" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2196" class="blob-num js-line-number" data-line-number="2196"></td>
        <td id="LC2196" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> ( k <span class="pl-k">=</span> rowIndex; k <span class="pl-k">&lt;</span> rowIndex <span class="pl-k">+</span> rowSpan; k<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2197" class="blob-num js-line-number" data-line-number="2197"></td>
        <td id="LC2197" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> matrix[ k ] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2198" class="blob-num js-line-number" data-line-number="2198"></td>
        <td id="LC2198" class="blob-code blob-code-inner js-file-line">							matrix[ k ] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2199" class="blob-num js-line-number" data-line-number="2199"></td>
        <td id="LC2199" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L2200" class="blob-num js-line-number" data-line-number="2200"></td>
        <td id="LC2200" class="blob-code blob-code-inner js-file-line">						matrixrow <span class="pl-k">=</span> matrix[ k ];</td>
      </tr>
      <tr>
        <td id="L2201" class="blob-num js-line-number" data-line-number="2201"></td>
        <td id="LC2201" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span> ( l <span class="pl-k">=</span> firstAvailCol; l <span class="pl-k">&lt;</span> firstAvailCol <span class="pl-k">+</span> colSpan; l<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2202" class="blob-num js-line-number" data-line-number="2202"></td>
        <td id="LC2202" class="blob-code blob-code-inner js-file-line">							matrixrow[ l ] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>x<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2203" class="blob-num js-line-number" data-line-number="2203"></td>
        <td id="LC2203" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L2204" class="blob-num js-line-number" data-line-number="2204"></td>
        <td id="LC2204" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2205" class="blob-num js-line-number" data-line-number="2205"></td>
        <td id="LC2205" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2206" class="blob-num js-line-number" data-line-number="2206"></td>
        <td id="LC2206" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2207" class="blob-num js-line-number" data-line-number="2207"></td>
        <td id="LC2207" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">matrixrow</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L2208" class="blob-num js-line-number" data-line-number="2208"></td>
        <td id="LC2208" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2209" class="blob-num js-line-number" data-line-number="2209"></td>
        <td id="LC2209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2210" class="blob-num js-line-number" data-line-number="2210"></td>
        <td id="LC2210" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// automatically add a colgroup with col elements set to a percentage width</span></td>
      </tr>
      <tr>
        <td id="L2211" class="blob-num js-line-number" data-line-number="2211"></td>
        <td id="LC2211" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">fixColumnWidth</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2212" class="blob-num js-line-number" data-line-number="2212"></td>
        <td id="LC2212" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L2213" class="blob-num js-line-number" data-line-number="2213"></td>
        <td id="LC2213" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> overallWidth, percent, $tbodies, len, index,</td>
      </tr>
      <tr>
        <td id="L2214" class="blob-num js-line-number" data-line-number="2214"></td>
        <td id="LC2214" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2215" class="blob-num js-line-number" data-line-number="2215"></td>
        <td id="LC2215" class="blob-code blob-code-inner js-file-line">				$colgroup <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>colgroup<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2216" class="blob-num js-line-number" data-line-number="2216"></td>
        <td id="LC2216" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// remove plugin-added colgroup, in case we need to refresh the widths</span></td>
      </tr>
      <tr>
        <td id="L2217" class="blob-num js-line-number" data-line-number="2217"></td>
        <td id="LC2217" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">$colgroup</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$colgroup</span>.<span class="pl-en">hasClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">colgroup</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L2218" class="blob-num js-line-number" data-line-number="2218"></td>
        <td id="LC2218" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$colgroup</span>.<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L2219" class="blob-num js-line-number" data-line-number="2219"></td>
        <td id="LC2219" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2220" class="blob-num js-line-number" data-line-number="2220"></td>
        <td id="LC2220" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">c</span>.<span class="pl-smi">widthFixed</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>colgroup<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L2221" class="blob-num js-line-number" data-line-number="2221"></td>
        <td id="LC2221" class="blob-code blob-code-inner js-file-line">				$colgroup <span class="pl-k">=</span> <span class="pl-en">$</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;colgroup class=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">colgroup</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2222" class="blob-num js-line-number" data-line-number="2222"></td>
        <td id="LC2222" class="blob-code blob-code-inner js-file-line">				overallWidth <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-c1">width</span>();</td>
      </tr>
      <tr>
        <td id="L2223" class="blob-num js-line-number" data-line-number="2223"></td>
        <td id="LC2223" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// only add col for visible columns - fixes #371</span></td>
      </tr>
      <tr>
        <td id="L2224" class="blob-num js-line-number" data-line-number="2224"></td>
        <td id="LC2224" class="blob-code blob-code-inner js-file-line">				$tbodies <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr:first<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>:visible<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2225" class="blob-num js-line-number" data-line-number="2225"></td>
        <td id="LC2225" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L2226" class="blob-num js-line-number" data-line-number="2226"></td>
        <td id="LC2226" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> len; index<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2227" class="blob-num js-line-number" data-line-number="2227"></td>
        <td id="LC2227" class="blob-code blob-code-inner js-file-line">					percent <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>( ( <span class="pl-smi">$tbodies</span>.<span class="pl-en">eq</span>( index ).<span class="pl-c1">width</span>() <span class="pl-k">/</span> overallWidth ) <span class="pl-k">*</span> <span class="pl-c1">1000</span>, <span class="pl-c1">10</span> ) <span class="pl-k">/</span> <span class="pl-c1">10</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2228" class="blob-num js-line-number" data-line-number="2228"></td>
        <td id="LC2228" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$colgroup</span>.<span class="pl-en">append</span>( <span class="pl-en">$</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;col&gt;<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">css</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>, percent ) );</td>
      </tr>
      <tr>
        <td id="L2229" class="blob-num js-line-number" data-line-number="2229"></td>
        <td id="LC2229" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2230" class="blob-num js-line-number" data-line-number="2230"></td>
        <td id="LC2230" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-en">prepend</span>( $colgroup );</td>
      </tr>
      <tr>
        <td id="L2231" class="blob-num js-line-number" data-line-number="2231"></td>
        <td id="LC2231" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2232" class="blob-num js-line-number" data-line-number="2232"></td>
        <td id="LC2232" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2233" class="blob-num js-line-number" data-line-number="2233"></td>
        <td id="LC2233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2234" class="blob-num js-line-number" data-line-number="2234"></td>
        <td id="LC2234" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// get sorter, string, empty, etc options for each column from</span></td>
      </tr>
      <tr>
        <td id="L2235" class="blob-num js-line-number" data-line-number="2235"></td>
        <td id="LC2235" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// jQuery data, metadata, header option or header class name (&#39;sorter-false&#39;)</span></td>
      </tr>
      <tr>
        <td id="L2236" class="blob-num js-line-number" data-line-number="2236"></td>
        <td id="LC2236" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// priority = jQuery data &gt; meta &gt; headers option &gt; header class name</span></td>
      </tr>
      <tr>
        <td id="L2237" class="blob-num js-line-number" data-line-number="2237"></td>
        <td id="LC2237" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getData</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">header</span>, <span class="pl-smi">configHeader</span>, <span class="pl-smi">key</span> ) {</td>
      </tr>
      <tr>
        <td id="L2238" class="blob-num js-line-number" data-line-number="2238"></td>
        <td id="LC2238" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> meta, cl4ss,</td>
      </tr>
      <tr>
        <td id="L2239" class="blob-num js-line-number" data-line-number="2239"></td>
        <td id="LC2239" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2240" class="blob-num js-line-number" data-line-number="2240"></td>
        <td id="LC2240" class="blob-code blob-code-inner js-file-line">				$header <span class="pl-k">=</span> <span class="pl-en">$</span>( header );</td>
      </tr>
      <tr>
        <td id="L2241" class="blob-num js-line-number" data-line-number="2241"></td>
        <td id="LC2241" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">$header</span>.<span class="pl-c1">length</span> ) { <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>; }</td>
      </tr>
      <tr>
        <td id="L2242" class="blob-num js-line-number" data-line-number="2242"></td>
        <td id="LC2242" class="blob-code blob-code-inner js-file-line">			meta <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-smi">metadata</span> <span class="pl-k">?</span> <span class="pl-smi">$header</span>.<span class="pl-en">metadata</span>() <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2243" class="blob-num js-line-number" data-line-number="2243"></td>
        <td id="LC2243" class="blob-code blob-code-inner js-file-line">			cl4ss <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> ( <span class="pl-smi">$header</span>.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2244" class="blob-num js-line-number" data-line-number="2244"></td>
        <td id="LC2244" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> <span class="pl-smi">$header</span>.<span class="pl-c1">data</span>( key ) <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L2245" class="blob-num js-line-number" data-line-number="2245"></td>
        <td id="LC2245" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">typeof</span> <span class="pl-smi">$header</span>.<span class="pl-c1">data</span>( <span class="pl-smi">key</span>.<span class="pl-c1">toLowerCase</span>() ) <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2246" class="blob-num js-line-number" data-line-number="2246"></td>
        <td id="LC2246" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// &#39;data-lockedOrder&#39; is assigned to &#39;lockedorder&#39;; but &#39;data-locked-order&#39; is assigned to &#39;lockedOrder&#39;</span></td>
      </tr>
      <tr>
        <td id="L2247" class="blob-num js-line-number" data-line-number="2247"></td>
        <td id="LC2247" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// &#39;data-sort-initial-order&#39; is assigned to &#39;sortInitialOrder&#39;</span></td>
      </tr>
      <tr>
        <td id="L2248" class="blob-num js-line-number" data-line-number="2248"></td>
        <td id="LC2248" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">+=</span> <span class="pl-smi">$header</span>.<span class="pl-c1">data</span>( key ) <span class="pl-k">||</span> <span class="pl-smi">$header</span>.<span class="pl-c1">data</span>( <span class="pl-smi">key</span>.<span class="pl-c1">toLowerCase</span>() );</td>
      </tr>
      <tr>
        <td id="L2249" class="blob-num js-line-number" data-line-number="2249"></td>
        <td id="LC2249" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( meta <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> meta[ key ] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2250" class="blob-num js-line-number" data-line-number="2250"></td>
        <td id="LC2250" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">+=</span> meta[ key ];</td>
      </tr>
      <tr>
        <td id="L2251" class="blob-num js-line-number" data-line-number="2251"></td>
        <td id="LC2251" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( configHeader <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> configHeader[ key ] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2252" class="blob-num js-line-number" data-line-number="2252"></td>
        <td id="LC2252" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">+=</span> configHeader[ key ];</td>
      </tr>
      <tr>
        <td id="L2253" class="blob-num js-line-number" data-line-number="2253"></td>
        <td id="LC2253" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span> ( cl4ss <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">cl4ss</span>.<span class="pl-c1">match</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> key <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span> ) ) {</td>
      </tr>
      <tr>
        <td id="L2254" class="blob-num js-line-number" data-line-number="2254"></td>
        <td id="LC2254" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// include sorter class name &#39;sorter-text&#39;, etc; now works with &#39;sorter-my-custom-parser&#39;</span></td>
      </tr>
      <tr>
        <td id="L2255" class="blob-num js-line-number" data-line-number="2255"></td>
        <td id="LC2255" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> <span class="pl-smi">cl4ss</span>.<span class="pl-c1">match</span>( <span class="pl-k">new</span> <span class="pl-en">RegExp</span>( <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>s<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> key <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>-([<span class="pl-cce">\\</span>w-]+)<span class="pl-pds">&#39;</span></span> ) )[ <span class="pl-c1">1</span> ] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2256" class="blob-num js-line-number" data-line-number="2256"></td>
        <td id="LC2256" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2257" class="blob-num js-line-number" data-line-number="2257"></td>
        <td id="LC2257" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( val );</td>
      </tr>
      <tr>
        <td id="L2258" class="blob-num js-line-number" data-line-number="2258"></td>
        <td id="LC2258" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2259" class="blob-num js-line-number" data-line-number="2259"></td>
        <td id="LC2259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2260" class="blob-num js-line-number" data-line-number="2260"></td>
        <td id="LC2260" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">getColumnData</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">obj</span>, <span class="pl-smi">indx</span>, <span class="pl-smi">getCell</span>, <span class="pl-smi">$headers</span> ) {</td>
      </tr>
      <tr>
        <td id="L2261" class="blob-num js-line-number" data-line-number="2261"></td>
        <td id="LC2261" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> obj <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> obj <span class="pl-k">===</span> <span class="pl-c1">null</span> ) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L2262" class="blob-num js-line-number" data-line-number="2262"></td>
        <td id="LC2262" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L2263" class="blob-num js-line-number" data-line-number="2263"></td>
        <td id="LC2263" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> $header, key,</td>
      </tr>
      <tr>
        <td id="L2264" class="blob-num js-line-number" data-line-number="2264"></td>
        <td id="LC2264" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2265" class="blob-num js-line-number" data-line-number="2265"></td>
        <td id="LC2265" class="blob-code blob-code-inner js-file-line">				$cells <span class="pl-k">=</span> ( $headers <span class="pl-k">||</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headers</span> ),</td>
      </tr>
      <tr>
        <td id="L2266" class="blob-num js-line-number" data-line-number="2266"></td>
        <td id="LC2266" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// c.$headerIndexed is not defined initially</span></td>
      </tr>
      <tr>
        <td id="L2267" class="blob-num js-line-number" data-line-number="2267"></td>
        <td id="LC2267" class="blob-code blob-code-inner js-file-line">				$cell <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headerIndexed</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headerIndexed</span>[ indx ] <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L2268" class="blob-num js-line-number" data-line-number="2268"></td>
        <td id="LC2268" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$cells</span>.<span class="pl-en">filter</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>[data-column=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> indx <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;]:last<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2269" class="blob-num js-line-number" data-line-number="2269"></td>
        <td id="LC2269" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( obj[ indx ] ) {</td>
      </tr>
      <tr>
        <td id="L2270" class="blob-num js-line-number" data-line-number="2270"></td>
        <td id="LC2270" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> getCell <span class="pl-k">?</span> obj[ indx ] <span class="pl-k">:</span> obj[ <span class="pl-smi">$cells</span>.<span class="pl-c1">index</span>( $cell ) ];</td>
      </tr>
      <tr>
        <td id="L2271" class="blob-num js-line-number" data-line-number="2271"></td>
        <td id="LC2271" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2272" class="blob-num js-line-number" data-line-number="2272"></td>
        <td id="LC2272" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( key <span class="pl-k">in</span> obj ) {</td>
      </tr>
      <tr>
        <td id="L2273" class="blob-num js-line-number" data-line-number="2273"></td>
        <td id="LC2273" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> key <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2274" class="blob-num js-line-number" data-line-number="2274"></td>
        <td id="LC2274" class="blob-code blob-code-inner js-file-line">					$header <span class="pl-k">=</span> $cell</td>
      </tr>
      <tr>
        <td id="L2275" class="blob-num js-line-number" data-line-number="2275"></td>
        <td id="LC2275" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// header cell with class/id</span></td>
      </tr>
      <tr>
        <td id="L2276" class="blob-num js-line-number" data-line-number="2276"></td>
        <td id="LC2276" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">filter</span>( key )</td>
      </tr>
      <tr>
        <td id="L2277" class="blob-num js-line-number" data-line-number="2277"></td>
        <td id="LC2277" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// find elements within the header cell with cell/id</span></td>
      </tr>
      <tr>
        <td id="L2278" class="blob-num js-line-number" data-line-number="2278"></td>
        <td id="LC2278" class="blob-code blob-code-inner js-file-line">						.<span class="pl-c1">add</span>( <span class="pl-smi">$cell</span>.<span class="pl-c1">find</span>( key ) );</td>
      </tr>
      <tr>
        <td id="L2279" class="blob-num js-line-number" data-line-number="2279"></td>
        <td id="LC2279" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-smi">$header</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L2280" class="blob-num js-line-number" data-line-number="2280"></td>
        <td id="LC2280" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> obj[ key ];</td>
      </tr>
      <tr>
        <td id="L2281" class="blob-num js-line-number" data-line-number="2281"></td>
        <td id="LC2281" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2282" class="blob-num js-line-number" data-line-number="2282"></td>
        <td id="LC2282" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2283" class="blob-num js-line-number" data-line-number="2283"></td>
        <td id="LC2283" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2284" class="blob-num js-line-number" data-line-number="2284"></td>
        <td id="LC2284" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L2285" class="blob-num js-line-number" data-line-number="2285"></td>
        <td id="LC2285" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2286" class="blob-num js-line-number" data-line-number="2286"></td>
        <td id="LC2286" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2287" class="blob-num js-line-number" data-line-number="2287"></td>
        <td id="LC2287" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// *** Process table ***</span></td>
      </tr>
      <tr>
        <td id="L2288" class="blob-num js-line-number" data-line-number="2288"></td>
        <td id="LC2288" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// add processing indicator</span></td>
      </tr>
      <tr>
        <td id="L2289" class="blob-num js-line-number" data-line-number="2289"></td>
        <td id="LC2289" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">isProcessing</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">$table</span>, <span class="pl-smi">toggle</span>, <span class="pl-smi">$headers</span> ) {</td>
      </tr>
      <tr>
        <td id="L2290" class="blob-num js-line-number" data-line-number="2290"></td>
        <td id="LC2290" class="blob-code blob-code-inner js-file-line">			$table <span class="pl-k">=</span> <span class="pl-en">$</span>( $table );</td>
      </tr>
      <tr>
        <td id="L2291" class="blob-num js-line-number" data-line-number="2291"></td>
        <td id="LC2291" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> c <span class="pl-k">=</span> $table[ <span class="pl-c1">0</span> ].<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2292" class="blob-num js-line-number" data-line-number="2292"></td>
        <td id="LC2292" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// default to all headers</span></td>
      </tr>
      <tr>
        <td id="L2293" class="blob-num js-line-number" data-line-number="2293"></td>
        <td id="LC2293" class="blob-code blob-code-inner js-file-line">				$header <span class="pl-k">=</span> $headers <span class="pl-k">||</span> <span class="pl-smi">$table</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">header</span> );</td>
      </tr>
      <tr>
        <td id="L2294" class="blob-num js-line-number" data-line-number="2294"></td>
        <td id="LC2294" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( toggle ) {</td>
      </tr>
      <tr>
        <td id="L2295" class="blob-num js-line-number" data-line-number="2295"></td>
        <td id="LC2295" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// don&#39;t use sortList if custom $headers used</span></td>
      </tr>
      <tr>
        <td id="L2296" class="blob-num js-line-number" data-line-number="2296"></td>
        <td id="LC2296" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> $headers <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L2297" class="blob-num js-line-number" data-line-number="2297"></td>
        <td id="LC2297" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// get headers from the sortList</span></td>
      </tr>
      <tr>
        <td id="L2298" class="blob-num js-line-number" data-line-number="2298"></td>
        <td id="LC2298" class="blob-code blob-code-inner js-file-line">					$header <span class="pl-k">=</span> <span class="pl-smi">$header</span>.<span class="pl-en">filter</span>( <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2299" class="blob-num js-line-number" data-line-number="2299"></td>
        <td id="LC2299" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">// get data-column from attr to keep compatibility with jQuery 1.2.6</span></td>
      </tr>
      <tr>
        <td id="L2300" class="blob-num js-line-number" data-line-number="2300"></td>
        <td id="LC2300" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-smi">sortDisabled</span> <span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L2301" class="blob-num js-line-number" data-line-number="2301"></td>
        <td id="LC2301" class="blob-code blob-code-inner js-file-line">							false <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2302" class="blob-num js-line-number" data-line-number="2302"></td>
        <td id="LC2302" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">ts</span>.<span class="pl-en">isValueInArray</span>( <span class="pl-c1">parseFloat</span>( <span class="pl-en">$</span>( <span class="pl-v">this</span> ).<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> ) ), <span class="pl-smi">c</span>.<span class="pl-smi">sortList</span> ) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2303" class="blob-num js-line-number" data-line-number="2303"></td>
        <td id="LC2303" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L2304" class="blob-num js-line-number" data-line-number="2304"></td>
        <td id="LC2304" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2305" class="blob-num js-line-number" data-line-number="2305"></td>
        <td id="LC2305" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$table</span>.<span class="pl-c1">add</span>( $header ).<span class="pl-en">addClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">processing</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssProcessing</span> );</td>
      </tr>
      <tr>
        <td id="L2306" class="blob-num js-line-number" data-line-number="2306"></td>
        <td id="LC2306" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2307" class="blob-num js-line-number" data-line-number="2307"></td>
        <td id="LC2307" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$table</span>.<span class="pl-c1">add</span>( $header ).<span class="pl-en">removeClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">processing</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssProcessing</span> );</td>
      </tr>
      <tr>
        <td id="L2308" class="blob-num js-line-number" data-line-number="2308"></td>
        <td id="LC2308" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2309" class="blob-num js-line-number" data-line-number="2309"></td>
        <td id="LC2309" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2310" class="blob-num js-line-number" data-line-number="2310"></td>
        <td id="LC2310" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2311" class="blob-num js-line-number" data-line-number="2311"></td>
        <td id="LC2311" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// detach tbody but save the position</span></td>
      </tr>
      <tr>
        <td id="L2312" class="blob-num js-line-number" data-line-number="2312"></td>
        <td id="LC2312" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// don&#39;t use tbody because there are portions that look for a tbody index (updateCell)</span></td>
      </tr>
      <tr>
        <td id="L2313" class="blob-num js-line-number" data-line-number="2313"></td>
        <td id="LC2313" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">processTbody</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">$tb</span>, <span class="pl-smi">getIt</span> ) {</td>
      </tr>
      <tr>
        <td id="L2314" class="blob-num js-line-number" data-line-number="2314"></td>
        <td id="LC2314" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L2315" class="blob-num js-line-number" data-line-number="2315"></td>
        <td id="LC2315" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( getIt ) {</td>
      </tr>
      <tr>
        <td id="L2316" class="blob-num js-line-number" data-line-number="2316"></td>
        <td id="LC2316" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">table</span>.<span class="pl-smi">isProcessing</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L2317" class="blob-num js-line-number" data-line-number="2317"></td>
        <td id="LC2317" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$tb</span>.<span class="pl-en">before</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;colgroup class=&quot;tablesorter-savemyplace&quot;/&gt;<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2318" class="blob-num js-line-number" data-line-number="2318"></td>
        <td id="LC2318" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-smi">detach</span> <span class="pl-k">?</span> <span class="pl-smi">$tb</span>.<span class="pl-en">detach</span>() <span class="pl-k">:</span> <span class="pl-smi">$tb</span>.<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L2319" class="blob-num js-line-number" data-line-number="2319"></td>
        <td id="LC2319" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2320" class="blob-num js-line-number" data-line-number="2320"></td>
        <td id="LC2320" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> holdr <span class="pl-k">=</span> <span class="pl-en">$</span>( table ).<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>colgroup.tablesorter-savemyplace<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2321" class="blob-num js-line-number" data-line-number="2321"></td>
        <td id="LC2321" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$tb</span>.<span class="pl-en">insertAfter</span>( holdr );</td>
      </tr>
      <tr>
        <td id="L2322" class="blob-num js-line-number" data-line-number="2322"></td>
        <td id="LC2322" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">holdr</span>.<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L2323" class="blob-num js-line-number" data-line-number="2323"></td>
        <td id="LC2323" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">isProcessing</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2324" class="blob-num js-line-number" data-line-number="2324"></td>
        <td id="LC2324" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2325" class="blob-num js-line-number" data-line-number="2325"></td>
        <td id="LC2325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2326" class="blob-num js-line-number" data-line-number="2326"></td>
        <td id="LC2326" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">clearTableBody</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2327" class="blob-num js-line-number" data-line-number="2327"></td>
        <td id="LC2327" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ].<span class="pl-smi">config</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-en">children</span>().<span class="pl-en">detach</span>();</td>
      </tr>
      <tr>
        <td id="L2328" class="blob-num js-line-number" data-line-number="2328"></td>
        <td id="LC2328" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2329" class="blob-num js-line-number" data-line-number="2329"></td>
        <td id="LC2329" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2330" class="blob-num js-line-number" data-line-number="2330"></td>
        <td id="LC2330" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// used when replacing accented characters during sorting</span></td>
      </tr>
      <tr>
        <td id="L2331" class="blob-num js-line-number" data-line-number="2331"></td>
        <td id="LC2331" class="blob-code blob-code-inner js-file-line">		characterEquivalents <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L2332" class="blob-num js-line-number" data-line-number="2332"></td>
        <td id="LC2332" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>a<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00e1<span class="pl-cce">\u</span>00e0<span class="pl-cce">\u</span>00e2<span class="pl-cce">\u</span>00e3<span class="pl-cce">\u</span>00e4<span class="pl-cce">\u</span>0105<span class="pl-cce">\u</span>00e5<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// áàâãäąå</span></td>
      </tr>
      <tr>
        <td id="L2333" class="blob-num js-line-number" data-line-number="2333"></td>
        <td id="LC2333" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>A<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00c1<span class="pl-cce">\u</span>00c0<span class="pl-cce">\u</span>00c2<span class="pl-cce">\u</span>00c3<span class="pl-cce">\u</span>00c4<span class="pl-cce">\u</span>0104<span class="pl-cce">\u</span>00c5<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// ÁÀÂÃÄĄÅ</span></td>
      </tr>
      <tr>
        <td id="L2334" class="blob-num js-line-number" data-line-number="2334"></td>
        <td id="LC2334" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>c<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00e7<span class="pl-cce">\u</span>0107<span class="pl-cce">\u</span>010d<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// çćč</span></td>
      </tr>
      <tr>
        <td id="L2335" class="blob-num js-line-number" data-line-number="2335"></td>
        <td id="LC2335" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>C<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00c7<span class="pl-cce">\u</span>0106<span class="pl-cce">\u</span>010c<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// ÇĆČ</span></td>
      </tr>
      <tr>
        <td id="L2336" class="blob-num js-line-number" data-line-number="2336"></td>
        <td id="LC2336" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>e<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00e9<span class="pl-cce">\u</span>00e8<span class="pl-cce">\u</span>00ea<span class="pl-cce">\u</span>00eb<span class="pl-cce">\u</span>011b<span class="pl-cce">\u</span>0119<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// éèêëěę</span></td>
      </tr>
      <tr>
        <td id="L2337" class="blob-num js-line-number" data-line-number="2337"></td>
        <td id="LC2337" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>E<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00c9<span class="pl-cce">\u</span>00c8<span class="pl-cce">\u</span>00ca<span class="pl-cce">\u</span>00cb<span class="pl-cce">\u</span>011a<span class="pl-cce">\u</span>0118<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// ÉÈÊËĚĘ</span></td>
      </tr>
      <tr>
        <td id="L2338" class="blob-num js-line-number" data-line-number="2338"></td>
        <td id="LC2338" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00ed<span class="pl-cce">\u</span>00ec<span class="pl-cce">\u</span>0130<span class="pl-cce">\u</span>00ee<span class="pl-cce">\u</span>00ef<span class="pl-cce">\u</span>0131<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// íìİîïı</span></td>
      </tr>
      <tr>
        <td id="L2339" class="blob-num js-line-number" data-line-number="2339"></td>
        <td id="LC2339" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>I<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00cd<span class="pl-cce">\u</span>00cc<span class="pl-cce">\u</span>0130<span class="pl-cce">\u</span>00ce<span class="pl-cce">\u</span>00cf<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// ÍÌİÎÏ</span></td>
      </tr>
      <tr>
        <td id="L2340" class="blob-num js-line-number" data-line-number="2340"></td>
        <td id="LC2340" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>o<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00f3<span class="pl-cce">\u</span>00f2<span class="pl-cce">\u</span>00f4<span class="pl-cce">\u</span>00f5<span class="pl-cce">\u</span>00f6<span class="pl-cce">\u</span>014d<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// óòôõöō</span></td>
      </tr>
      <tr>
        <td id="L2341" class="blob-num js-line-number" data-line-number="2341"></td>
        <td id="LC2341" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>O<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00d3<span class="pl-cce">\u</span>00d2<span class="pl-cce">\u</span>00d4<span class="pl-cce">\u</span>00d5<span class="pl-cce">\u</span>00d6<span class="pl-cce">\u</span>014c<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// ÓÒÔÕÖŌ</span></td>
      </tr>
      <tr>
        <td id="L2342" class="blob-num js-line-number" data-line-number="2342"></td>
        <td id="LC2342" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>ss<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00df<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// ß (s sharp)</span></td>
      </tr>
      <tr>
        <td id="L2343" class="blob-num js-line-number" data-line-number="2343"></td>
        <td id="LC2343" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>SS<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>1e9e<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// ẞ (Capital sharp s)</span></td>
      </tr>
      <tr>
        <td id="L2344" class="blob-num js-line-number" data-line-number="2344"></td>
        <td id="LC2344" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>u<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00fa<span class="pl-cce">\u</span>00f9<span class="pl-cce">\u</span>00fb<span class="pl-cce">\u</span>00fc<span class="pl-cce">\u</span>016f<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// úùûüů</span></td>
      </tr>
      <tr>
        <td id="L2345" class="blob-num js-line-number" data-line-number="2345"></td>
        <td id="LC2345" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>U<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\u</span>00da<span class="pl-cce">\u</span>00d9<span class="pl-cce">\u</span>00db<span class="pl-cce">\u</span>00dc<span class="pl-cce">\u</span>016e<span class="pl-pds">&#39;</span></span> <span class="pl-c">// ÚÙÛÜŮ</span></td>
      </tr>
      <tr>
        <td id="L2346" class="blob-num js-line-number" data-line-number="2346"></td>
        <td id="LC2346" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2347" class="blob-num js-line-number" data-line-number="2347"></td>
        <td id="LC2347" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2348" class="blob-num js-line-number" data-line-number="2348"></td>
        <td id="LC2348" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">replaceAccents</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2349" class="blob-num js-line-number" data-line-number="2349"></td>
        <td id="LC2349" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> chr,</td>
      </tr>
      <tr>
        <td id="L2350" class="blob-num js-line-number" data-line-number="2350"></td>
        <td id="LC2350" class="blob-code blob-code-inner js-file-line">				acc <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2351" class="blob-num js-line-number" data-line-number="2351"></td>
        <td id="LC2351" class="blob-code blob-code-inner js-file-line">				eq <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-smi">characterEquivalents</span>;</td>
      </tr>
      <tr>
        <td id="L2352" class="blob-num js-line-number" data-line-number="2352"></td>
        <td id="LC2352" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">ts</span>.<span class="pl-smi">characterRegex</span> ) {</td>
      </tr>
      <tr>
        <td id="L2353" class="blob-num js-line-number" data-line-number="2353"></td>
        <td id="LC2353" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-smi">characterRegexArray</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L2354" class="blob-num js-line-number" data-line-number="2354"></td>
        <td id="LC2354" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( chr <span class="pl-k">in</span> eq ) {</td>
      </tr>
      <tr>
        <td id="L2355" class="blob-num js-line-number" data-line-number="2355"></td>
        <td id="LC2355" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> chr <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2356" class="blob-num js-line-number" data-line-number="2356"></td>
        <td id="LC2356" class="blob-code blob-code-inner js-file-line">						acc <span class="pl-k">+=</span> eq[ chr ];</td>
      </tr>
      <tr>
        <td id="L2357" class="blob-num js-line-number" data-line-number="2357"></td>
        <td id="LC2357" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">ts</span>.<span class="pl-smi">characterRegexArray</span>[ chr ] <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> eq[ chr ] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>g<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2358" class="blob-num js-line-number" data-line-number="2358"></td>
        <td id="LC2358" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2359" class="blob-num js-line-number" data-line-number="2359"></td>
        <td id="LC2359" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2360" class="blob-num js-line-number" data-line-number="2360"></td>
        <td id="LC2360" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-smi">characterRegex</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>( acc <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2361" class="blob-num js-line-number" data-line-number="2361"></td>
        <td id="LC2361" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2362" class="blob-num js-line-number" data-line-number="2362"></td>
        <td id="LC2362" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-smi">ts</span>.<span class="pl-smi">characterRegex</span>.<span class="pl-c1">test</span>( str ) ) {</td>
      </tr>
      <tr>
        <td id="L2363" class="blob-num js-line-number" data-line-number="2363"></td>
        <td id="LC2363" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( chr <span class="pl-k">in</span> eq ) {</td>
      </tr>
      <tr>
        <td id="L2364" class="blob-num js-line-number" data-line-number="2364"></td>
        <td id="LC2364" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> chr <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2365" class="blob-num js-line-number" data-line-number="2365"></td>
        <td id="LC2365" class="blob-code blob-code-inner js-file-line">						str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">characterRegexArray</span>[ chr ], chr );</td>
      </tr>
      <tr>
        <td id="L2366" class="blob-num js-line-number" data-line-number="2366"></td>
        <td id="LC2366" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L2367" class="blob-num js-line-number" data-line-number="2367"></td>
        <td id="LC2367" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2368" class="blob-num js-line-number" data-line-number="2368"></td>
        <td id="LC2368" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2369" class="blob-num js-line-number" data-line-number="2369"></td>
        <td id="LC2369" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L2370" class="blob-num js-line-number" data-line-number="2370"></td>
        <td id="LC2370" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2371" class="blob-num js-line-number" data-line-number="2371"></td>
        <td id="LC2371" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2372" class="blob-num js-line-number" data-line-number="2372"></td>
        <td id="LC2372" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// restore headers</span></td>
      </tr>
      <tr>
        <td id="L2373" class="blob-num js-line-number" data-line-number="2373"></td>
        <td id="LC2373" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">restoreHeaders</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2374" class="blob-num js-line-number" data-line-number="2374"></td>
        <td id="LC2374" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> index, $cell,</td>
      </tr>
      <tr>
        <td id="L2375" class="blob-num js-line-number" data-line-number="2375"></td>
        <td id="LC2375" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ].<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2376" class="blob-num js-line-number" data-line-number="2376"></td>
        <td id="LC2376" class="blob-code blob-code-inner js-file-line">				$headers <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$table</span>.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorHeaders</span> ),</td>
      </tr>
      <tr>
        <td id="L2377" class="blob-num js-line-number" data-line-number="2377"></td>
        <td id="LC2377" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">$headers</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L2378" class="blob-num js-line-number" data-line-number="2378"></td>
        <td id="LC2378" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// don&#39;t use c.$headers here in case header cells were swapped</span></td>
      </tr>
      <tr>
        <td id="L2379" class="blob-num js-line-number" data-line-number="2379"></td>
        <td id="LC2379" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( index <span class="pl-k">=</span> <span class="pl-c1">0</span>; index <span class="pl-k">&lt;</span> len; index<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2380" class="blob-num js-line-number" data-line-number="2380"></td>
        <td id="LC2380" class="blob-code blob-code-inner js-file-line">				$cell <span class="pl-k">=</span> <span class="pl-smi">$headers</span>.<span class="pl-en">eq</span>( index );</td>
      </tr>
      <tr>
        <td id="L2381" class="blob-num js-line-number" data-line-number="2381"></td>
        <td id="LC2381" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// only restore header cells if it is wrapped</span></td>
      </tr>
      <tr>
        <td id="L2382" class="blob-num js-line-number" data-line-number="2382"></td>
        <td id="LC2382" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// because this is also used by the updateAll method</span></td>
      </tr>
      <tr>
        <td id="L2383" class="blob-num js-line-number" data-line-number="2383"></td>
        <td id="LC2383" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">$cell</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">headerIn</span> ).<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L2384" class="blob-num js-line-number" data-line-number="2384"></td>
        <td id="LC2384" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$cell</span>.<span class="pl-en">html</span>( <span class="pl-smi">c</span>.<span class="pl-smi">headerContent</span>[ index ] );</td>
      </tr>
      <tr>
        <td id="L2385" class="blob-num js-line-number" data-line-number="2385"></td>
        <td id="LC2385" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2386" class="blob-num js-line-number" data-line-number="2386"></td>
        <td id="LC2386" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2387" class="blob-num js-line-number" data-line-number="2387"></td>
        <td id="LC2387" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2388" class="blob-num js-line-number" data-line-number="2388"></td>
        <td id="LC2388" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2389" class="blob-num js-line-number" data-line-number="2389"></td>
        <td id="LC2389" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">destroy</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">removeClasses</span>, <span class="pl-smi">callback</span> ) {</td>
      </tr>
      <tr>
        <td id="L2390" class="blob-num js-line-number" data-line-number="2390"></td>
        <td id="LC2390" class="blob-code blob-code-inner js-file-line">			table <span class="pl-k">=</span> <span class="pl-en">$</span>( table )[ <span class="pl-c1">0</span> ];</td>
      </tr>
      <tr>
        <td id="L2391" class="blob-num js-line-number" data-line-number="2391"></td>
        <td id="LC2391" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> ) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L2392" class="blob-num js-line-number" data-line-number="2392"></td>
        <td id="LC2392" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// remove all widgets</span></td>
      </tr>
      <tr>
        <td id="L2393" class="blob-num js-line-number" data-line-number="2393"></td>
        <td id="LC2393" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">removeWidget</span>( table, <span class="pl-c1">true</span>, <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L2394" class="blob-num js-line-number" data-line-number="2394"></td>
        <td id="LC2394" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> events,</td>
      </tr>
      <tr>
        <td id="L2395" class="blob-num js-line-number" data-line-number="2395"></td>
        <td id="LC2395" class="blob-code blob-code-inner js-file-line">				$t <span class="pl-k">=</span> <span class="pl-en">$</span>( table ),</td>
      </tr>
      <tr>
        <td id="L2396" class="blob-num js-line-number" data-line-number="2396"></td>
        <td id="LC2396" class="blob-code blob-code-inner js-file-line">				c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2397" class="blob-num js-line-number" data-line-number="2397"></td>
        <td id="LC2397" class="blob-code blob-code-inner js-file-line">				debug <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">debug</span>,</td>
      </tr>
      <tr>
        <td id="L2398" class="blob-num js-line-number" data-line-number="2398"></td>
        <td id="LC2398" class="blob-code blob-code-inner js-file-line">				$h <span class="pl-k">=</span> <span class="pl-smi">$t</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>thead:first<span class="pl-pds">&#39;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L2399" class="blob-num js-line-number" data-line-number="2399"></td>
        <td id="LC2399" class="blob-code blob-code-inner js-file-line">				$r <span class="pl-k">=</span> <span class="pl-smi">$h</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">headerRow</span> ).<span class="pl-en">removeClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">headerRow</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssHeaderRow</span> ),</td>
      </tr>
      <tr>
        <td id="L2400" class="blob-num js-line-number" data-line-number="2400"></td>
        <td id="LC2400" class="blob-code blob-code-inner js-file-line">				$f <span class="pl-k">=</span> <span class="pl-smi">$t</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tfoot:first &gt; tr<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>th, td<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2401" class="blob-num js-line-number" data-line-number="2401"></td>
        <td id="LC2401" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( removeClasses <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>uitheme<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">c</span>.<span class="pl-smi">widgets</span> ) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span> ) {</td>
      </tr>
      <tr>
        <td id="L2402" class="blob-num js-line-number" data-line-number="2402"></td>
        <td id="LC2402" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// reapply uitheme classes, in case we want to maintain appearance</span></td>
      </tr>
      <tr>
        <td id="L2403" class="blob-num js-line-number" data-line-number="2403"></td>
        <td id="LC2403" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$t</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>applyWidgetId<span class="pl-pds">&#39;</span></span>, [ <span class="pl-s"><span class="pl-pds">&#39;</span>uitheme<span class="pl-pds">&#39;</span></span> ] );</td>
      </tr>
      <tr>
        <td id="L2404" class="blob-num js-line-number" data-line-number="2404"></td>
        <td id="LC2404" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$t</span>.<span class="pl-en">triggerHandler</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>applyWidgetId<span class="pl-pds">&#39;</span></span>, [ <span class="pl-s"><span class="pl-pds">&#39;</span>zebra<span class="pl-pds">&#39;</span></span> ] );</td>
      </tr>
      <tr>
        <td id="L2405" class="blob-num js-line-number" data-line-number="2405"></td>
        <td id="LC2405" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2406" class="blob-num js-line-number" data-line-number="2406"></td>
        <td id="LC2406" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// remove widget added rows, just in case</span></td>
      </tr>
      <tr>
        <td id="L2407" class="blob-num js-line-number" data-line-number="2407"></td>
        <td id="LC2407" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$h</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">not</span>( $r ).<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L2408" class="blob-num js-line-number" data-line-number="2408"></td>
        <td id="LC2408" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// disable tablesorter - not using .unbind( namespace ) because namespacing was</span></td>
      </tr>
      <tr>
        <td id="L2409" class="blob-num js-line-number" data-line-number="2409"></td>
        <td id="LC2409" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// added in jQuery v1.4.3 - see http://api.jquery.com/event.namespace/</span></td>
      </tr>
      <tr>
        <td id="L2410" class="blob-num js-line-number" data-line-number="2410"></td>
        <td id="LC2410" class="blob-code blob-code-inner js-file-line">			events <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L2411" class="blob-num js-line-number" data-line-number="2411"></td>
        <td id="LC2411" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L2412" class="blob-num js-line-number" data-line-number="2412"></td>
        <td id="LC2412" class="blob-code blob-code-inner js-file-line">				<span class="pl-s"><span class="pl-pds">&#39;</span>keypress sortBegin sortEnd resetToLoadState <span class="pl-pds">&#39;</span></span>.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L2413" class="blob-num js-line-number" data-line-number="2413"></td>
        <td id="LC2413" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">join</span>( <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2414" class="blob-num js-line-number" data-line-number="2414"></td>
        <td id="LC2414" class="blob-code blob-code-inner js-file-line">			$t</td>
      </tr>
      <tr>
        <td id="L2415" class="blob-num js-line-number" data-line-number="2415"></td>
        <td id="LC2415" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">removeData</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L2416" class="blob-num js-line-number" data-line-number="2416"></td>
        <td id="LC2416" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">unbind</span>( <span class="pl-smi">events</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">spaces</span>, <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L2417" class="blob-num js-line-number" data-line-number="2417"></td>
        <td id="LC2417" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">$headers</span></td>
      </tr>
      <tr>
        <td id="L2418" class="blob-num js-line-number" data-line-number="2418"></td>
        <td id="LC2418" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">add</span>( $f )</td>
      </tr>
      <tr>
        <td id="L2419" class="blob-num js-line-number" data-line-number="2419"></td>
        <td id="LC2419" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">removeClass</span>( [ <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">header</span>, <span class="pl-smi">c</span>.<span class="pl-smi">cssHeader</span>, <span class="pl-smi">c</span>.<span class="pl-smi">cssAsc</span>, <span class="pl-smi">c</span>.<span class="pl-smi">cssDesc</span>, <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortAsc</span>, <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortDesc</span>, <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">sortNone</span> ].<span class="pl-c1">join</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) )</td>
      </tr>
      <tr>
        <td id="L2420" class="blob-num js-line-number" data-line-number="2420"></td>
        <td id="LC2420" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">removeAttr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>data-column<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L2421" class="blob-num js-line-number" data-line-number="2421"></td>
        <td id="LC2421" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">removeAttr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-label<span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L2422" class="blob-num js-line-number" data-line-number="2422"></td>
        <td id="LC2422" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">attr</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>aria-disabled<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>true<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2423" class="blob-num js-line-number" data-line-number="2423"></td>
        <td id="LC2423" class="blob-code blob-code-inner js-file-line">			$r</td>
      </tr>
      <tr>
        <td id="L2424" class="blob-num js-line-number" data-line-number="2424"></td>
        <td id="LC2424" class="blob-code blob-code-inner js-file-line">				.<span class="pl-c1">find</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorSort</span> )</td>
      </tr>
      <tr>
        <td id="L2425" class="blob-num js-line-number" data-line-number="2425"></td>
        <td id="LC2425" class="blob-code blob-code-inner js-file-line">				.<span class="pl-en">unbind</span>( ( <span class="pl-s"><span class="pl-pds">&#39;</span>mousedown mouseup keypress <span class="pl-pds">&#39;</span></span>.<span class="pl-c1">split</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">join</span>( <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) ).<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">spaces</span>, <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L2426" class="blob-num js-line-number" data-line-number="2426"></td>
        <td id="LC2426" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-en">restoreHeaders</span>( table );</td>
      </tr>
      <tr>
        <td id="L2427" class="blob-num js-line-number" data-line-number="2427"></td>
        <td id="LC2427" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">$t</span>.<span class="pl-en">toggleClass</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">css</span>.<span class="pl-smi">table</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">tableClass</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> tablesorter-<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">theme</span>, removeClasses <span class="pl-k">===</span> <span class="pl-c1">false</span> );</td>
      </tr>
      <tr>
        <td id="L2428" class="blob-num js-line-number" data-line-number="2428"></td>
        <td id="LC2428" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// clear flag in case the plugin is initialized again</span></td>
      </tr>
      <tr>
        <td id="L2429" class="blob-num js-line-number" data-line-number="2429"></td>
        <td id="LC2429" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2430" class="blob-num js-line-number" data-line-number="2430"></td>
        <td id="LC2430" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">delete</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>.<span class="pl-smi">cache</span>;</td>
      </tr>
      <tr>
        <td id="L2431" class="blob-num js-line-number" data-line-number="2431"></td>
        <td id="LC2431" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">typeof</span> callback <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2432" class="blob-num js-line-number" data-line-number="2432"></td>
        <td id="LC2432" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>( table );</td>
      </tr>
      <tr>
        <td id="L2433" class="blob-num js-line-number" data-line-number="2433"></td>
        <td id="LC2433" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2434" class="blob-num js-line-number" data-line-number="2434"></td>
        <td id="LC2434" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( debug ) {</td>
      </tr>
      <tr>
        <td id="L2435" class="blob-num js-line-number" data-line-number="2435"></td>
        <td id="LC2435" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">console</span>.<span class="pl-c1">log</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tablesorter has been removed<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2436" class="blob-num js-line-number" data-line-number="2436"></td>
        <td id="LC2436" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2437" class="blob-num js-line-number" data-line-number="2437"></td>
        <td id="LC2437" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2438" class="blob-num js-line-number" data-line-number="2438"></td>
        <td id="LC2438" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2439" class="blob-num js-line-number" data-line-number="2439"></td>
        <td id="LC2439" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L2440" class="blob-num js-line-number" data-line-number="2440"></td>
        <td id="LC2440" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2441" class="blob-num js-line-number" data-line-number="2441"></td>
        <td id="LC2441" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>.<span class="pl-en">tablesorter</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">settings</span> ) {</td>
      </tr>
      <tr>
        <td id="L2442" class="blob-num js-line-number" data-line-number="2442"></td>
        <td id="LC2442" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-en">each</span>( <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2443" class="blob-num js-line-number" data-line-number="2443"></td>
        <td id="LC2443" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> table <span class="pl-k">=</span> <span class="pl-v">this</span>,</td>
      </tr>
      <tr>
        <td id="L2444" class="blob-num js-line-number" data-line-number="2444"></td>
        <td id="LC2444" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// merge &amp; extend config options</span></td>
      </tr>
      <tr>
        <td id="L2445" class="blob-num js-line-number" data-line-number="2445"></td>
        <td id="LC2445" class="blob-code blob-code-inner js-file-line">			c <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>( <span class="pl-c1">true</span>, {}, <span class="pl-smi">ts</span>.<span class="pl-smi">defaults</span>, settings, <span class="pl-smi">ts</span>.<span class="pl-smi">instanceMethods</span> );</td>
      </tr>
      <tr>
        <td id="L2446" class="blob-num js-line-number" data-line-number="2446"></td>
        <td id="LC2446" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// save initial settings</span></td>
      </tr>
      <tr>
        <td id="L2447" class="blob-num js-line-number" data-line-number="2447"></td>
        <td id="LC2447" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">c</span>.<span class="pl-smi">originalSettings</span> <span class="pl-k">=</span> settings;</td>
      </tr>
      <tr>
        <td id="L2448" class="blob-num js-line-number" data-line-number="2448"></td>
        <td id="LC2448" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// create a table from data (build table widget)</span></td>
      </tr>
      <tr>
        <td id="L2449" class="blob-num js-line-number" data-line-number="2449"></td>
        <td id="LC2449" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">table</span>.<span class="pl-smi">hasInitialized</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">ts</span>.<span class="pl-smi">buildTable</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.<span class="pl-c1">nodeName</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>TABLE<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2450" class="blob-num js-line-number" data-line-number="2450"></td>
        <td id="LC2450" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// return the table (in case the original target is the table&#39;s container)</span></td>
      </tr>
      <tr>
        <td id="L2451" class="blob-num js-line-number" data-line-number="2451"></td>
        <td id="LC2451" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">buildTable</span>( table, c );</td>
      </tr>
      <tr>
        <td id="L2452" class="blob-num js-line-number" data-line-number="2452"></td>
        <td id="LC2452" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L2453" class="blob-num js-line-number" data-line-number="2453"></td>
        <td id="LC2453" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">setup</span>( table, c );</td>
      </tr>
      <tr>
        <td id="L2454" class="blob-num js-line-number" data-line-number="2454"></td>
        <td id="LC2454" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2455" class="blob-num js-line-number" data-line-number="2455"></td>
        <td id="LC2455" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L2456" class="blob-num js-line-number" data-line-number="2456"></td>
        <td id="LC2456" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L2457" class="blob-num js-line-number" data-line-number="2457"></td>
        <td id="LC2457" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2458" class="blob-num js-line-number" data-line-number="2458"></td>
        <td id="LC2458" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// set up debug logs</span></td>
      </tr>
      <tr>
        <td id="L2459" class="blob-num js-line-number" data-line-number="2459"></td>
        <td id="LC2459" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> ( <span class="pl-k">!</span>( <span class="pl-c1">window</span>.<span class="pl-smi">console</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">window</span>.<span class="pl-smi">console</span>.<span class="pl-smi">log</span> ) ) {</td>
      </tr>
      <tr>
        <td id="L2460" class="blob-num js-line-number" data-line-number="2460"></td>
        <td id="LC2460" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// access $.tablesorter.logs for browsers that don&#39;t have a console...</span></td>
      </tr>
      <tr>
        <td id="L2461" class="blob-num js-line-number" data-line-number="2461"></td>
        <td id="LC2461" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">ts</span>.<span class="pl-smi">logs</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L2462" class="blob-num js-line-number" data-line-number="2462"></td>
        <td id="LC2462" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*jshint -W020 */</span></td>
      </tr>
      <tr>
        <td id="L2463" class="blob-num js-line-number" data-line-number="2463"></td>
        <td id="LC2463" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">console</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L2464" class="blob-num js-line-number" data-line-number="2464"></td>
        <td id="LC2464" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">console</span>.<span class="pl-smi">log</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">warn</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-smi">error</span> <span class="pl-k">=</span> <span class="pl-en">console</span>.<span class="pl-en">table</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2465" class="blob-num js-line-number" data-line-number="2465"></td>
        <td id="LC2465" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> arg <span class="pl-k">=</span> <span class="pl-v">arguments</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-v">arguments</span> <span class="pl-k">:</span> <span class="pl-v">arguments</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L2466" class="blob-num js-line-number" data-line-number="2466"></td>
        <td id="LC2466" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">ts</span>.<span class="pl-smi">logs</span>[ <span class="pl-smi">ts</span>.<span class="pl-smi">logs</span>.<span class="pl-c1">length</span> ] <span class="pl-k">=</span> { date<span class="pl-k">:</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>(), log<span class="pl-k">:</span> arg };</td>
      </tr>
      <tr>
        <td id="L2467" class="blob-num js-line-number" data-line-number="2467"></td>
        <td id="LC2467" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L2468" class="blob-num js-line-number" data-line-number="2468"></td>
        <td id="LC2468" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L2469" class="blob-num js-line-number" data-line-number="2469"></td>
        <td id="LC2469" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2470" class="blob-num js-line-number" data-line-number="2470"></td>
        <td id="LC2470" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// add default parsers</span></td>
      </tr>
      <tr>
        <td id="L2471" class="blob-num js-line-number" data-line-number="2471"></td>
        <td id="LC2471" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2472" class="blob-num js-line-number" data-line-number="2472"></td>
        <td id="LC2472" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>no-parser<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2473" class="blob-num js-line-number" data-line-number="2473"></td>
        <td id="LC2473" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2474" class="blob-num js-line-number" data-line-number="2474"></td>
        <td id="LC2474" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2475" class="blob-num js-line-number" data-line-number="2475"></td>
        <td id="LC2475" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2476" class="blob-num js-line-number" data-line-number="2476"></td>
        <td id="LC2476" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2477" class="blob-num js-line-number" data-line-number="2477"></td>
        <td id="LC2477" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2478" class="blob-num js-line-number" data-line-number="2478"></td>
        <td id="LC2478" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2479" class="blob-num js-line-number" data-line-number="2479"></td>
        <td id="LC2479" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2480" class="blob-num js-line-number" data-line-number="2480"></td>
        <td id="LC2480" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2481" class="blob-num js-line-number" data-line-number="2481"></td>
        <td id="LC2481" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2482" class="blob-num js-line-number" data-line-number="2482"></td>
        <td id="LC2482" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2483" class="blob-num js-line-number" data-line-number="2483"></td>
        <td id="LC2483" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2484" class="blob-num js-line-number" data-line-number="2484"></td>
        <td id="LC2484" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2485" class="blob-num js-line-number" data-line-number="2485"></td>
        <td id="LC2485" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L2486" class="blob-num js-line-number" data-line-number="2486"></td>
        <td id="LC2486" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2487" class="blob-num js-line-number" data-line-number="2487"></td>
        <td id="LC2487" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2488" class="blob-num js-line-number" data-line-number="2488"></td>
        <td id="LC2488" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>;</td>
      </tr>
      <tr>
        <td id="L2489" class="blob-num js-line-number" data-line-number="2489"></td>
        <td id="LC2489" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( str ) {</td>
      </tr>
      <tr>
        <td id="L2490" class="blob-num js-line-number" data-line-number="2490"></td>
        <td id="LC2490" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( <span class="pl-smi">c</span>.<span class="pl-c1">ignoreCase</span> <span class="pl-k">?</span> <span class="pl-smi">str</span>.<span class="pl-en">toLocaleLowerCase</span>() <span class="pl-k">:</span> str );</td>
      </tr>
      <tr>
        <td id="L2491" class="blob-num js-line-number" data-line-number="2491"></td>
        <td id="LC2491" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">sortLocaleCompare</span> <span class="pl-k">?</span> <span class="pl-smi">ts</span>.<span class="pl-en">replaceAccents</span>( str ) <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2492" class="blob-num js-line-number" data-line-number="2492"></td>
        <td id="LC2492" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2493" class="blob-num js-line-number" data-line-number="2493"></td>
        <td id="LC2493" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L2494" class="blob-num js-line-number" data-line-number="2494"></td>
        <td id="LC2494" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2495" class="blob-num js-line-number" data-line-number="2495"></td>
        <td id="LC2495" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2496" class="blob-num js-line-number" data-line-number="2496"></td>
        <td id="LC2496" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2497" class="blob-num js-line-number" data-line-number="2497"></td>
        <td id="LC2497" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2498" class="blob-num js-line-number" data-line-number="2498"></td>
        <td id="LC2498" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">nondigit</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-k">^</span><span class="pl-c1">\w</span>,<span class="pl-c1">.</span> <span class="pl-c1">\-(</span>)]</span><span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L2499" class="blob-num js-line-number" data-line-number="2499"></td>
        <td id="LC2499" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2500" class="blob-num js-line-number" data-line-number="2500"></td>
        <td id="LC2500" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>digit<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2501" class="blob-num js-line-number" data-line-number="2501"></td>
        <td id="LC2501" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2502" class="blob-num js-line-number" data-line-number="2502"></td>
        <td id="LC2502" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-en">isDigit</span>( str );</td>
      </tr>
      <tr>
        <td id="L2503" class="blob-num js-line-number" data-line-number="2503"></td>
        <td id="LC2503" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2504" class="blob-num js-line-number" data-line-number="2504"></td>
        <td id="LC2504" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2505" class="blob-num js-line-number" data-line-number="2505"></td>
        <td id="LC2505" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> num <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">formatFloat</span>( ( str <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">nondigit</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ), table );</td>
      </tr>
      <tr>
        <td id="L2506" class="blob-num js-line-number" data-line-number="2506"></td>
        <td id="LC2506" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> num <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> num <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2507" class="blob-num js-line-number" data-line-number="2507"></td>
        <td id="LC2507" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">?</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( str <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>.<span class="pl-c1">ignoreCase</span> <span class="pl-k">?</span> <span class="pl-smi">str</span>.<span class="pl-en">toLocaleLowerCase</span>() <span class="pl-k">:</span> str ) <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2508" class="blob-num js-line-number" data-line-number="2508"></td>
        <td id="LC2508" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2509" class="blob-num js-line-number" data-line-number="2509"></td>
        <td id="LC2509" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2510" class="blob-num js-line-number" data-line-number="2510"></td>
        <td id="LC2510" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2511" class="blob-num js-line-number" data-line-number="2511"></td>
        <td id="LC2511" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2512" class="blob-num js-line-number" data-line-number="2512"></td>
        <td id="LC2512" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">currencyReplace</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[+<span class="pl-c1">\-,</span><span class="pl-c1">.</span> ]</span><span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L2513" class="blob-num js-line-number" data-line-number="2513"></td>
        <td id="LC2513" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">currencyTest</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\(</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-cce">\u</span>00a3$<span class="pl-cce">\u</span>20ac<span class="pl-cce">\u</span>00a4<span class="pl-cce">\u</span>00a5<span class="pl-cce">\u</span>00a2?<span class="pl-c1">.</span>]</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-cce">\u</span>00a3$<span class="pl-cce">\u</span>20ac<span class="pl-cce">\u</span>00a4<span class="pl-cce">\u</span>00a5<span class="pl-cce">\u</span>00a2?<span class="pl-c1">.</span>]</span><span class="pl-c1">\d</span><span class="pl-k">+</span><span class="pl-cce">\)</span><span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2514" class="blob-num js-line-number" data-line-number="2514"></td>
        <td id="LC2514" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2515" class="blob-num js-line-number" data-line-number="2515"></td>
        <td id="LC2515" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>currency<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2516" class="blob-num js-line-number" data-line-number="2516"></td>
        <td id="LC2516" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2517" class="blob-num js-line-number" data-line-number="2517"></td>
        <td id="LC2517" class="blob-code blob-code-inner js-file-line">			str <span class="pl-k">=</span> ( str <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">currencyReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2518" class="blob-num js-line-number" data-line-number="2518"></td>
        <td id="LC2518" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// test for £$€¤¥¢</span></td>
      </tr>
      <tr>
        <td id="L2519" class="blob-num js-line-number" data-line-number="2519"></td>
        <td id="LC2519" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">currencyTest</span>.<span class="pl-c1">test</span>( str );</td>
      </tr>
      <tr>
        <td id="L2520" class="blob-num js-line-number" data-line-number="2520"></td>
        <td id="LC2520" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2521" class="blob-num js-line-number" data-line-number="2521"></td>
        <td id="LC2521" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2522" class="blob-num js-line-number" data-line-number="2522"></td>
        <td id="LC2522" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> num <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">formatFloat</span>( ( str <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">nondigit</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ), table );</td>
      </tr>
      <tr>
        <td id="L2523" class="blob-num js-line-number" data-line-number="2523"></td>
        <td id="LC2523" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> num <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> num <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L2524" class="blob-num js-line-number" data-line-number="2524"></td>
        <td id="LC2524" class="blob-code blob-code-inner js-file-line">				str <span class="pl-k">?</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( str <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>.<span class="pl-c1">ignoreCase</span> <span class="pl-k">?</span> <span class="pl-smi">str</span>.<span class="pl-en">toLocaleLowerCase</span>() <span class="pl-k">:</span> str ) <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2525" class="blob-num js-line-number" data-line-number="2525"></td>
        <td id="LC2525" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2526" class="blob-num js-line-number" data-line-number="2526"></td>
        <td id="LC2526" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2527" class="blob-num js-line-number" data-line-number="2527"></td>
        <td id="LC2527" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2528" class="blob-num js-line-number" data-line-number="2528"></td>
        <td id="LC2528" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2529" class="blob-num js-line-number" data-line-number="2529"></td>
        <td id="LC2529" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// too many protocols to add them all https://en.wikipedia.org/wiki/URI_scheme</span></td>
      </tr>
      <tr>
        <td id="L2530" class="blob-num js-line-number" data-line-number="2530"></td>
        <td id="LC2530" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// now, this regex can be updated before initialization</span></td>
      </tr>
      <tr>
        <td id="L2531" class="blob-num js-line-number" data-line-number="2531"></td>
        <td id="LC2531" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">urlProtocolTest</span> <span class="pl-k">=</span><span class="pl-sr">   <span class="pl-pds">/</span><span class="pl-k">^</span>(https<span class="pl-k">?</span><span class="pl-k">|</span>ftp<span class="pl-k">|</span>file):<span class="pl-cce">\/\/</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2532" class="blob-num js-line-number" data-line-number="2532"></td>
        <td id="LC2532" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">urlProtocolReplace</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(https<span class="pl-k">?</span><span class="pl-k">|</span>ftp<span class="pl-k">|</span>file):<span class="pl-cce">\/\/</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2533" class="blob-num js-line-number" data-line-number="2533"></td>
        <td id="LC2533" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2534" class="blob-num js-line-number" data-line-number="2534"></td>
        <td id="LC2534" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>url<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2535" class="blob-num js-line-number" data-line-number="2535"></td>
        <td id="LC2535" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2536" class="blob-num js-line-number" data-line-number="2536"></td>
        <td id="LC2536" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">urlProtocolTest</span>.<span class="pl-c1">test</span>( str );</td>
      </tr>
      <tr>
        <td id="L2537" class="blob-num js-line-number" data-line-number="2537"></td>
        <td id="LC2537" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2538" class="blob-num js-line-number" data-line-number="2538"></td>
        <td id="LC2538" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2539" class="blob-num js-line-number" data-line-number="2539"></td>
        <td id="LC2539" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str <span class="pl-k">?</span> <span class="pl-smi">$</span>.<span class="pl-en">trim</span>( <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">urlProtocolReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ) ) <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2540" class="blob-num js-line-number" data-line-number="2540"></td>
        <td id="LC2540" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2541" class="blob-num js-line-number" data-line-number="2541"></td>
        <td id="LC2541" class="blob-code blob-code-inner js-file-line">		parsed <span class="pl-k">:</span> <span class="pl-c1">true</span>, <span class="pl-c">// filter widget flag</span></td>
      </tr>
      <tr>
        <td id="L2542" class="blob-num js-line-number" data-line-number="2542"></td>
        <td id="LC2542" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2543" class="blob-num js-line-number" data-line-number="2543"></td>
        <td id="LC2543" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2544" class="blob-num js-line-number" data-line-number="2544"></td>
        <td id="LC2544" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2545" class="blob-num js-line-number" data-line-number="2545"></td>
        <td id="LC2545" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">dash</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>-<span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L2546" class="blob-num js-line-number" data-line-number="2546"></td>
        <td id="LC2546" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">isoDate</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\d</span><span class="pl-k">{4}</span><span class="pl-c1">[<span class="pl-cce">\/\-</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-c1">[<span class="pl-cce">\/\-</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2547" class="blob-num js-line-number" data-line-number="2547"></td>
        <td id="LC2547" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2548" class="blob-num js-line-number" data-line-number="2548"></td>
        <td id="LC2548" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>isoDate<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2549" class="blob-num js-line-number" data-line-number="2549"></td>
        <td id="LC2549" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2550" class="blob-num js-line-number" data-line-number="2550"></td>
        <td id="LC2550" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">isoDate</span>.<span class="pl-c1">test</span>( str );</td>
      </tr>
      <tr>
        <td id="L2551" class="blob-num js-line-number" data-line-number="2551"></td>
        <td id="LC2551" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2552" class="blob-num js-line-number" data-line-number="2552"></td>
        <td id="LC2552" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2553" class="blob-num js-line-number" data-line-number="2553"></td>
        <td id="LC2553" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> date <span class="pl-k">=</span> str <span class="pl-k">?</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>( <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">dash</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> ) ) <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2554" class="blob-num js-line-number" data-line-number="2554"></td>
        <td id="LC2554" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> date <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">isFinite</span>( date ) <span class="pl-k">?</span> <span class="pl-smi">date</span>.<span class="pl-c1">getTime</span>() <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2555" class="blob-num js-line-number" data-line-number="2555"></td>
        <td id="LC2555" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2556" class="blob-num js-line-number" data-line-number="2556"></td>
        <td id="LC2556" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2557" class="blob-num js-line-number" data-line-number="2557"></td>
        <td id="LC2557" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2558" class="blob-num js-line-number" data-line-number="2558"></td>
        <td id="LC2558" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2559" class="blob-num js-line-number" data-line-number="2559"></td>
        <td id="LC2559" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">percent</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>%<span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L2560" class="blob-num js-line-number" data-line-number="2560"></td>
        <td id="LC2560" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">percentTest</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">\d\s</span><span class="pl-k">*?</span>%<span class="pl-k">|</span>%<span class="pl-c1">\s</span><span class="pl-k">*?</span><span class="pl-c1">\d</span>)<span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2561" class="blob-num js-line-number" data-line-number="2561"></td>
        <td id="LC2561" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2562" class="blob-num js-line-number" data-line-number="2562"></td>
        <td id="LC2562" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>percent<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2563" class="blob-num js-line-number" data-line-number="2563"></td>
        <td id="LC2563" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2564" class="blob-num js-line-number" data-line-number="2564"></td>
        <td id="LC2564" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">percentTest</span>.<span class="pl-c1">test</span>( str ) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">str</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">15</span>;</td>
      </tr>
      <tr>
        <td id="L2565" class="blob-num js-line-number" data-line-number="2565"></td>
        <td id="LC2565" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2566" class="blob-num js-line-number" data-line-number="2566"></td>
        <td id="LC2566" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2567" class="blob-num js-line-number" data-line-number="2567"></td>
        <td id="LC2567" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str <span class="pl-k">?</span> <span class="pl-smi">ts</span>.<span class="pl-en">formatFloat</span>( <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">percent</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ), table ) <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2568" class="blob-num js-line-number" data-line-number="2568"></td>
        <td id="LC2568" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2569" class="blob-num js-line-number" data-line-number="2569"></td>
        <td id="LC2569" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2570" class="blob-num js-line-number" data-line-number="2570"></td>
        <td id="LC2570" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2571" class="blob-num js-line-number" data-line-number="2571"></td>
        <td id="LC2571" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2572" class="blob-num js-line-number" data-line-number="2572"></td>
        <td id="LC2572" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// added image parser to core v2.17.9</span></td>
      </tr>
      <tr>
        <td id="L2573" class="blob-num js-line-number" data-line-number="2573"></td>
        <td id="LC2573" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2574" class="blob-num js-line-number" data-line-number="2574"></td>
        <td id="LC2574" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>image<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2575" class="blob-num js-line-number" data-line-number="2575"></td>
        <td id="LC2575" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span>, <span class="pl-smi">node</span>, <span class="pl-smi">$node</span> ) {</td>
      </tr>
      <tr>
        <td id="L2576" class="blob-num js-line-number" data-line-number="2576"></td>
        <td id="LC2576" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">$node</span>.<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2577" class="blob-num js-line-number" data-line-number="2577"></td>
        <td id="LC2577" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2578" class="blob-num js-line-number" data-line-number="2578"></td>
        <td id="LC2578" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span>, <span class="pl-smi">cell</span> ) {</td>
      </tr>
      <tr>
        <td id="L2579" class="blob-num js-line-number" data-line-number="2579"></td>
        <td id="LC2579" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-en">$</span>( cell ).<span class="pl-c1">find</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>img<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">attr</span>( <span class="pl-smi">table</span>.<span class="pl-smi">config</span>.<span class="pl-smi">imgAttr</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>alt<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span> str;</td>
      </tr>
      <tr>
        <td id="L2580" class="blob-num js-line-number" data-line-number="2580"></td>
        <td id="LC2580" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2581" class="blob-num js-line-number" data-line-number="2581"></td>
        <td id="LC2581" class="blob-code blob-code-inner js-file-line">		parsed <span class="pl-k">:</span> <span class="pl-c1">true</span>, <span class="pl-c">// filter widget flag</span></td>
      </tr>
      <tr>
        <td id="L2582" class="blob-num js-line-number" data-line-number="2582"></td>
        <td id="LC2582" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2583" class="blob-num js-line-number" data-line-number="2583"></td>
        <td id="LC2583" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2584" class="blob-num js-line-number" data-line-number="2584"></td>
        <td id="LC2584" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2585" class="blob-num js-line-number" data-line-number="2585"></td>
        <td id="LC2585" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">dateReplace</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">\S</span>)(<span class="pl-c1">[AP]</span>M)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>; <span class="pl-c">// used by usLongDate &amp; time parser</span></td>
      </tr>
      <tr>
        <td id="L2586" class="blob-num js-line-number" data-line-number="2586"></td>
        <td id="LC2586" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">usLongDateTest1</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span><span class="pl-k">{3,10}</span><span class="pl-cce">\.</span><span class="pl-k">?</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span>,<span class="pl-k">?</span><span class="pl-c1">\s</span><span class="pl-k">+</span>(<span class="pl-c1">\d</span><span class="pl-k">{4}</span>)(<span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span>:<span class="pl-c1">\d</span><span class="pl-k">{2}</span>(:<span class="pl-c1">\d</span><span class="pl-k">{2}</span>)<span class="pl-k">?</span>(<span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-c1">[AP]</span>M)<span class="pl-k">?</span>)<span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-pds">/</span>i</span>;</td>
      </tr>
      <tr>
        <td id="L2587" class="blob-num js-line-number" data-line-number="2587"></td>
        <td id="LC2587" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">usLongDateTest2</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-c1">[<span class="pl-c1">A-Z</span>]</span><span class="pl-k">{3,10}</span><span class="pl-c1">\s</span><span class="pl-k">+</span><span class="pl-c1">\d</span><span class="pl-k">{4}</span><span class="pl-pds">/</span>i</span>;</td>
      </tr>
      <tr>
        <td id="L2588" class="blob-num js-line-number" data-line-number="2588"></td>
        <td id="LC2588" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2589" class="blob-num js-line-number" data-line-number="2589"></td>
        <td id="LC2589" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>usLongDate<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2590" class="blob-num js-line-number" data-line-number="2590"></td>
        <td id="LC2590" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2591" class="blob-num js-line-number" data-line-number="2591"></td>
        <td id="LC2591" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// two digit years are not allowed cross-browser</span></td>
      </tr>
      <tr>
        <td id="L2592" class="blob-num js-line-number" data-line-number="2592"></td>
        <td id="LC2592" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Jan 01, 2013 12:34:56 PM or 01 Jan 2013</span></td>
      </tr>
      <tr>
        <td id="L2593" class="blob-num js-line-number" data-line-number="2593"></td>
        <td id="LC2593" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">usLongDateTest1</span>.<span class="pl-c1">test</span>( str ) <span class="pl-k">||</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">usLongDateTest2</span>.<span class="pl-c1">test</span>( str );</td>
      </tr>
      <tr>
        <td id="L2594" class="blob-num js-line-number" data-line-number="2594"></td>
        <td id="LC2594" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2595" class="blob-num js-line-number" data-line-number="2595"></td>
        <td id="LC2595" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2596" class="blob-num js-line-number" data-line-number="2596"></td>
        <td id="LC2596" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> date <span class="pl-k">=</span> str <span class="pl-k">?</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>( <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">dateReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1 $2<span class="pl-pds">&#39;</span></span> ) ) <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2597" class="blob-num js-line-number" data-line-number="2597"></td>
        <td id="LC2597" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> date <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">isFinite</span>( date ) <span class="pl-k">?</span> <span class="pl-smi">date</span>.<span class="pl-c1">getTime</span>() <span class="pl-k">:</span> str;</td>
      </tr>
      <tr>
        <td id="L2598" class="blob-num js-line-number" data-line-number="2598"></td>
        <td id="LC2598" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2599" class="blob-num js-line-number" data-line-number="2599"></td>
        <td id="LC2599" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2600" class="blob-num js-line-number" data-line-number="2600"></td>
        <td id="LC2600" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2601" class="blob-num js-line-number" data-line-number="2601"></td>
        <td id="LC2601" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2602" class="blob-num js-line-number" data-line-number="2602"></td>
        <td id="LC2602" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// testing for ##-##-#### or ####-##-##, so it&#39;s not perfect; time can be included</span></td>
      </tr>
      <tr>
        <td id="L2603" class="blob-num js-line-number" data-line-number="2603"></td>
        <td id="LC2603" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateTest</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-k">^</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{4}</span>)<span class="pl-k">|</span>(<span class="pl-k">^</span><span class="pl-c1">\d</span><span class="pl-k">{4}</span><span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span><span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span><span class="pl-c1">\d</span><span class="pl-k">{1,2}</span>)<span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2604" class="blob-num js-line-number" data-line-number="2604"></td>
        <td id="LC2604" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// escaped &quot;-&quot; because JSHint in Firefox was showing it as an error</span></td>
      </tr>
      <tr>
        <td id="L2605" class="blob-num js-line-number" data-line-number="2605"></td>
        <td id="LC2605" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateReplace</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\-.</span>,]</span><span class="pl-pds">/</span>g</span>;</td>
      </tr>
      <tr>
        <td id="L2606" class="blob-num js-line-number" data-line-number="2606"></td>
        <td id="LC2606" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// XXY covers MDY &amp; DMY formats</span></td>
      </tr>
      <tr>
        <td id="L2607" class="blob-num js-line-number" data-line-number="2607"></td>
        <td id="LC2607" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateXXY</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">\d</span><span class="pl-k">{1,2}</span>)<span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span>(<span class="pl-c1">\d</span><span class="pl-k">{1,2}</span>)<span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span>(<span class="pl-c1">\d</span><span class="pl-k">{4}</span>)<span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2608" class="blob-num js-line-number" data-line-number="2608"></td>
        <td id="LC2608" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateYMD</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">\d</span><span class="pl-k">{4}</span>)<span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span>(<span class="pl-c1">\d</span><span class="pl-k">{1,2}</span>)<span class="pl-c1">[<span class="pl-cce">\/</span><span class="pl-c1">\s</span>]</span>(<span class="pl-c1">\d</span><span class="pl-k">{1,2}</span>)<span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L2609" class="blob-num js-line-number" data-line-number="2609"></td>
        <td id="LC2609" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">convertFormat</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">dateString</span>, <span class="pl-smi">format</span> ) {</td>
      </tr>
      <tr>
        <td id="L2610" class="blob-num js-line-number" data-line-number="2610"></td>
        <td id="LC2610" class="blob-code blob-code-inner js-file-line">		dateString <span class="pl-k">=</span> ( dateString <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L2611" class="blob-num js-line-number" data-line-number="2611"></td>
        <td id="LC2611" class="blob-code blob-code-inner js-file-line">			.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">spaces</span>, <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> )</td>
      </tr>
      <tr>
        <td id="L2612" class="blob-num js-line-number" data-line-number="2612"></td>
        <td id="LC2612" class="blob-code blob-code-inner js-file-line">			.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2613" class="blob-num js-line-number" data-line-number="2613"></td>
        <td id="LC2613" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> ( format <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>mmddyyyy<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2614" class="blob-num js-line-number" data-line-number="2614"></td>
        <td id="LC2614" class="blob-code blob-code-inner js-file-line">			dateString <span class="pl-k">=</span> <span class="pl-smi">dateString</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateXXY</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$3/$1/$2<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2615" class="blob-num js-line-number" data-line-number="2615"></td>
        <td id="LC2615" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> ( format <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ddmmyyyy<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2616" class="blob-num js-line-number" data-line-number="2616"></td>
        <td id="LC2616" class="blob-code blob-code-inner js-file-line">			dateString <span class="pl-k">=</span> <span class="pl-smi">dateString</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateXXY</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$3/$2/$1<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2617" class="blob-num js-line-number" data-line-number="2617"></td>
        <td id="LC2617" class="blob-code blob-code-inner js-file-line">		} <span class="pl-k">else</span> <span class="pl-k">if</span> ( format <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>yyyymmdd<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L2618" class="blob-num js-line-number" data-line-number="2618"></td>
        <td id="LC2618" class="blob-code blob-code-inner js-file-line">			dateString <span class="pl-k">=</span> <span class="pl-smi">dateString</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateYMD</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1/$2/$3<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2619" class="blob-num js-line-number" data-line-number="2619"></td>
        <td id="LC2619" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2620" class="blob-num js-line-number" data-line-number="2620"></td>
        <td id="LC2620" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> date <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>( dateString );</td>
      </tr>
      <tr>
        <td id="L2621" class="blob-num js-line-number" data-line-number="2621"></td>
        <td id="LC2621" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">return</span> date <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">isFinite</span>( date ) <span class="pl-k">?</span> <span class="pl-smi">date</span>.<span class="pl-c1">getTime</span>() <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L2622" class="blob-num js-line-number" data-line-number="2622"></td>
        <td id="LC2622" class="blob-code blob-code-inner js-file-line">	};</td>
      </tr>
      <tr>
        <td id="L2623" class="blob-num js-line-number" data-line-number="2623"></td>
        <td id="LC2623" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2624" class="blob-num js-line-number" data-line-number="2624"></td>
        <td id="LC2624" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2625" class="blob-num js-line-number" data-line-number="2625"></td>
        <td id="LC2625" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>shortDate<span class="pl-pds">&#39;</span></span>, <span class="pl-c">// &#39;mmddyyyy&#39;, &#39;ddmmyyyy&#39; or &#39;yyyymmdd&#39;</span></td>
      </tr>
      <tr>
        <td id="L2626" class="blob-num js-line-number" data-line-number="2626"></td>
        <td id="LC2626" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2627" class="blob-num js-line-number" data-line-number="2627"></td>
        <td id="LC2627" class="blob-code blob-code-inner js-file-line">			str <span class="pl-k">=</span> ( str <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">spaces</span>, <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>/<span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2628" class="blob-num js-line-number" data-line-number="2628"></td>
        <td id="LC2628" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">shortDateTest</span>.<span class="pl-c1">test</span>( str );</td>
      </tr>
      <tr>
        <td id="L2629" class="blob-num js-line-number" data-line-number="2629"></td>
        <td id="LC2629" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2630" class="blob-num js-line-number" data-line-number="2630"></td>
        <td id="LC2630" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span>, <span class="pl-smi">cell</span>, <span class="pl-smi">cellIndex</span> ) {</td>
      </tr>
      <tr>
        <td id="L2631" class="blob-num js-line-number" data-line-number="2631"></td>
        <td id="LC2631" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( str ) {</td>
      </tr>
      <tr>
        <td id="L2632" class="blob-num js-line-number" data-line-number="2632"></td>
        <td id="LC2632" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2633" class="blob-num js-line-number" data-line-number="2633"></td>
        <td id="LC2633" class="blob-code blob-code-inner js-file-line">					$header <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$headerIndexed</span>[ cellIndex ],</td>
      </tr>
      <tr>
        <td id="L2634" class="blob-num js-line-number" data-line-number="2634"></td>
        <td id="LC2634" class="blob-code blob-code-inner js-file-line">					format <span class="pl-k">=</span> <span class="pl-smi">$header</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$header</span>.<span class="pl-c1">data</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>dateFormat<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L2635" class="blob-num js-line-number" data-line-number="2635"></td>
        <td id="LC2635" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">ts</span>.<span class="pl-en">getData</span>( $header, <span class="pl-smi">ts</span>.<span class="pl-en">getColumnData</span>( table, <span class="pl-smi">c</span>.<span class="pl-c1">headers</span>, cellIndex ), <span class="pl-s"><span class="pl-pds">&#39;</span>dateFormat<span class="pl-pds">&#39;</span></span> ) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L2636" class="blob-num js-line-number" data-line-number="2636"></td>
        <td id="LC2636" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">c</span>.<span class="pl-smi">dateFormat</span>;</td>
      </tr>
      <tr>
        <td id="L2637" class="blob-num js-line-number" data-line-number="2637"></td>
        <td id="LC2637" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// save format because getData can be slow...</span></td>
      </tr>
      <tr>
        <td id="L2638" class="blob-num js-line-number" data-line-number="2638"></td>
        <td id="LC2638" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">$header</span>.<span class="pl-c1">length</span> ) {</td>
      </tr>
      <tr>
        <td id="L2639" class="blob-num js-line-number" data-line-number="2639"></td>
        <td id="LC2639" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">$header</span>.<span class="pl-c1">data</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>dateFormat<span class="pl-pds">&#39;</span></span>, format );</td>
      </tr>
      <tr>
        <td id="L2640" class="blob-num js-line-number" data-line-number="2640"></td>
        <td id="LC2640" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2641" class="blob-num js-line-number" data-line-number="2641"></td>
        <td id="LC2641" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-en">convertFormat</span>( str, format ) <span class="pl-k">||</span> str;</td>
      </tr>
      <tr>
        <td id="L2642" class="blob-num js-line-number" data-line-number="2642"></td>
        <td id="LC2642" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2643" class="blob-num js-line-number" data-line-number="2643"></td>
        <td id="LC2643" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L2644" class="blob-num js-line-number" data-line-number="2644"></td>
        <td id="LC2644" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2645" class="blob-num js-line-number" data-line-number="2645"></td>
        <td id="LC2645" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2646" class="blob-num js-line-number" data-line-number="2646"></td>
        <td id="LC2646" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2647" class="blob-num js-line-number" data-line-number="2647"></td>
        <td id="LC2647" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2648" class="blob-num js-line-number" data-line-number="2648"></td>
        <td id="LC2648" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// match 24 hour time &amp; 12 hours time + am/pm - see http://regexr.com/3c3tk</span></td>
      </tr>
      <tr>
        <td id="L2649" class="blob-num js-line-number" data-line-number="2649"></td>
        <td id="LC2649" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">timeTest</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">^</span>(<span class="pl-c1">[<span class="pl-c1">1-9</span>]</span><span class="pl-k">|</span>1<span class="pl-c1">[<span class="pl-c1">0-2</span>]</span>):(<span class="pl-c1">[<span class="pl-c1">0-5</span>]</span><span class="pl-c1">\d</span>)(<span class="pl-c1">\s</span><span class="pl-c1">[AP]</span>M)<span class="pl-k">$</span><span class="pl-k">|</span><span class="pl-k">^</span>((?:<span class="pl-c1">[01]</span><span class="pl-c1">\d</span><span class="pl-k">|</span><span class="pl-c1">[2][<span class="pl-c1">0-4</span>]</span>):<span class="pl-c1">[<span class="pl-c1">0-5</span>]</span><span class="pl-c1">\d</span>)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>;</td>
      </tr>
      <tr>
        <td id="L2650" class="blob-num js-line-number" data-line-number="2650"></td>
        <td id="LC2650" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">timeMatch</span> <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span>(<span class="pl-c1">[<span class="pl-c1">1-9</span>]</span><span class="pl-k">|</span>1<span class="pl-c1">[<span class="pl-c1">0-2</span>]</span>):(<span class="pl-c1">[<span class="pl-c1">0-5</span>]</span><span class="pl-c1">\d</span>)(<span class="pl-c1">\s</span><span class="pl-c1">[AP]</span>M)<span class="pl-k">|</span>((?:<span class="pl-c1">[01]</span><span class="pl-c1">\d</span><span class="pl-k">|</span><span class="pl-c1">[2][<span class="pl-c1">0-4</span>]</span>):<span class="pl-c1">[<span class="pl-c1">0-5</span>]</span><span class="pl-c1">\d</span>)<span class="pl-pds">/</span>i</span>;</td>
      </tr>
      <tr>
        <td id="L2651" class="blob-num js-line-number" data-line-number="2651"></td>
        <td id="LC2651" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2652" class="blob-num js-line-number" data-line-number="2652"></td>
        <td id="LC2652" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>time<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2653" class="blob-num js-line-number" data-line-number="2653"></td>
        <td id="LC2653" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span> ) {</td>
      </tr>
      <tr>
        <td id="L2654" class="blob-num js-line-number" data-line-number="2654"></td>
        <td id="LC2654" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">timeTest</span>.<span class="pl-c1">test</span>( str );</td>
      </tr>
      <tr>
        <td id="L2655" class="blob-num js-line-number" data-line-number="2655"></td>
        <td id="LC2655" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2656" class="blob-num js-line-number" data-line-number="2656"></td>
        <td id="LC2656" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span> ) {</td>
      </tr>
      <tr>
        <td id="L2657" class="blob-num js-line-number" data-line-number="2657"></td>
        <td id="LC2657" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// isolate time... ignore month, day and year</span></td>
      </tr>
      <tr>
        <td id="L2658" class="blob-num js-line-number" data-line-number="2658"></td>
        <td id="LC2658" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> temp,</td>
      </tr>
      <tr>
        <td id="L2659" class="blob-num js-line-number" data-line-number="2659"></td>
        <td id="LC2659" class="blob-code blob-code-inner js-file-line">				timePart <span class="pl-k">=</span> ( str <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span> ).<span class="pl-c1">match</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">timeMatch</span> ),</td>
      </tr>
      <tr>
        <td id="L2660" class="blob-num js-line-number" data-line-number="2660"></td>
        <td id="LC2660" class="blob-code blob-code-inner js-file-line">				orig <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>( str ),</td>
      </tr>
      <tr>
        <td id="L2661" class="blob-num js-line-number" data-line-number="2661"></td>
        <td id="LC2661" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// no time component? default to 00:00 by leaving it out, but only if str is defined</span></td>
      </tr>
      <tr>
        <td id="L2662" class="blob-num js-line-number" data-line-number="2662"></td>
        <td id="LC2662" class="blob-code blob-code-inner js-file-line">				time <span class="pl-k">=</span> str <span class="pl-k">&amp;&amp;</span> ( timePart <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">?</span> timePart[ <span class="pl-c1">0</span> ] <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>00:00 AM<span class="pl-pds">&#39;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L2663" class="blob-num js-line-number" data-line-number="2663"></td>
        <td id="LC2663" class="blob-code blob-code-inner js-file-line">				date <span class="pl-k">=</span> time <span class="pl-k">?</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>2000/01/01 <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">time</span>.<span class="pl-c1">replace</span>( <span class="pl-smi">ts</span>.<span class="pl-smi">regex</span>.<span class="pl-smi">dateReplace</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1 $2<span class="pl-pds">&#39;</span></span> ) ) <span class="pl-k">:</span> time;</td>
      </tr>
      <tr>
        <td id="L2664" class="blob-num js-line-number" data-line-number="2664"></td>
        <td id="LC2664" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( date <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">isFinite</span>( date ) ) {</td>
      </tr>
      <tr>
        <td id="L2665" class="blob-num js-line-number" data-line-number="2665"></td>
        <td id="LC2665" class="blob-code blob-code-inner js-file-line">				temp <span class="pl-k">=</span> orig <span class="pl-k">instanceof</span> <span class="pl-c1">Date</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">isFinite</span>( orig ) <span class="pl-k">?</span> <span class="pl-smi">orig</span>.<span class="pl-c1">getTime</span>() <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2666" class="blob-num js-line-number" data-line-number="2666"></td>
        <td id="LC2666" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// if original string was a valid date, add it to the decimal so the column sorts in some kind of order</span></td>
      </tr>
      <tr>
        <td id="L2667" class="blob-num js-line-number" data-line-number="2667"></td>
        <td id="LC2667" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// luckily new Date() ignores the decimals</span></td>
      </tr>
      <tr>
        <td id="L2668" class="blob-num js-line-number" data-line-number="2668"></td>
        <td id="LC2668" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> temp <span class="pl-k">?</span> <span class="pl-c1">parseFloat</span>( <span class="pl-smi">date</span>.<span class="pl-c1">getTime</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">orig</span>.<span class="pl-c1">getTime</span>() ) <span class="pl-k">:</span> <span class="pl-smi">date</span>.<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L2669" class="blob-num js-line-number" data-line-number="2669"></td>
        <td id="LC2669" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2670" class="blob-num js-line-number" data-line-number="2670"></td>
        <td id="LC2670" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L2671" class="blob-num js-line-number" data-line-number="2671"></td>
        <td id="LC2671" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2672" class="blob-num js-line-number" data-line-number="2672"></td>
        <td id="LC2672" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2673" class="blob-num js-line-number" data-line-number="2673"></td>
        <td id="LC2673" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2674" class="blob-num js-line-number" data-line-number="2674"></td>
        <td id="LC2674" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2675" class="blob-num js-line-number" data-line-number="2675"></td>
        <td id="LC2675" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addParser</span>({</td>
      </tr>
      <tr>
        <td id="L2676" class="blob-num js-line-number" data-line-number="2676"></td>
        <td id="LC2676" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>metadata<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2677" class="blob-num js-line-number" data-line-number="2677"></td>
        <td id="LC2677" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">is</span> <span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2678" class="blob-num js-line-number" data-line-number="2678"></td>
        <td id="LC2678" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L2679" class="blob-num js-line-number" data-line-number="2679"></td>
        <td id="LC2679" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2680" class="blob-num js-line-number" data-line-number="2680"></td>
        <td id="LC2680" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">str</span>, <span class="pl-smi">table</span>, <span class="pl-smi">cell</span> ) {</td>
      </tr>
      <tr>
        <td id="L2681" class="blob-num js-line-number" data-line-number="2681"></td>
        <td id="LC2681" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> c <span class="pl-k">=</span> <span class="pl-smi">table</span>.<span class="pl-smi">config</span>,</td>
      </tr>
      <tr>
        <td id="L2682" class="blob-num js-line-number" data-line-number="2682"></td>
        <td id="LC2682" class="blob-code blob-code-inner js-file-line">			p <span class="pl-k">=</span> ( <span class="pl-k">!</span><span class="pl-smi">c</span>.<span class="pl-smi">parserMetadataName</span> ) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>sortValue<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-smi">c</span>.<span class="pl-smi">parserMetadataName</span>;</td>
      </tr>
      <tr>
        <td id="L2683" class="blob-num js-line-number" data-line-number="2683"></td>
        <td id="LC2683" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-en">$</span>( cell ).<span class="pl-en">metadata</span>()[ p ];</td>
      </tr>
      <tr>
        <td id="L2684" class="blob-num js-line-number" data-line-number="2684"></td>
        <td id="LC2684" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2685" class="blob-num js-line-number" data-line-number="2685"></td>
        <td id="LC2685" class="blob-code blob-code-inner js-file-line">		type <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>numeric<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L2686" class="blob-num js-line-number" data-line-number="2686"></td>
        <td id="LC2686" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2687" class="blob-num js-line-number" data-line-number="2687"></td>
        <td id="LC2687" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2688" class="blob-num js-line-number" data-line-number="2688"></td>
        <td id="LC2688" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2689" class="blob-num js-line-number" data-line-number="2689"></td>
        <td id="LC2689" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██████ ██████ █████▄ █████▄ ▄████▄</span></td>
      </tr>
      <tr>
        <td id="L2690" class="blob-num js-line-number" data-line-number="2690"></td>
        <td id="LC2690" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		  ▄█▀  ██▄▄   ██▄▄██ ██▄▄██ ██▄▄██</span></td>
      </tr>
      <tr>
        <td id="L2691" class="blob-num js-line-number" data-line-number="2691"></td>
        <td id="LC2691" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		▄█▀    ██▀▀   ██▀▀██ ██▀▀█  ██▀▀██</span></td>
      </tr>
      <tr>
        <td id="L2692" class="blob-num js-line-number" data-line-number="2692"></td>
        <td id="LC2692" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		██████ ██████ █████▀ ██  ██ ██  ██</span></td>
      </tr>
      <tr>
        <td id="L2693" class="blob-num js-line-number" data-line-number="2693"></td>
        <td id="LC2693" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*/</span></td>
      </tr>
      <tr>
        <td id="L2694" class="blob-num js-line-number" data-line-number="2694"></td>
        <td id="LC2694" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// add default widgets</span></td>
      </tr>
      <tr>
        <td id="L2695" class="blob-num js-line-number" data-line-number="2695"></td>
        <td id="LC2695" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">ts</span>.<span class="pl-en">addWidget</span>({</td>
      </tr>
      <tr>
        <td id="L2696" class="blob-num js-line-number" data-line-number="2696"></td>
        <td id="LC2696" class="blob-code blob-code-inner js-file-line">		id <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>zebra<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L2697" class="blob-num js-line-number" data-line-number="2697"></td>
        <td id="LC2697" class="blob-code blob-code-inner js-file-line">		priority <span class="pl-k">:</span> <span class="pl-c1">90</span>,</td>
      </tr>
      <tr>
        <td id="L2698" class="blob-num js-line-number" data-line-number="2698"></td>
        <td id="LC2698" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">format</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">c</span>, <span class="pl-smi">wo</span> ) {</td>
      </tr>
      <tr>
        <td id="L2699" class="blob-num js-line-number" data-line-number="2699"></td>
        <td id="LC2699" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> $visibleRows, $row, count, isEven, tbodyIndex, rowIndex, len,</td>
      </tr>
      <tr>
        <td id="L2700" class="blob-num js-line-number" data-line-number="2700"></td>
        <td id="LC2700" class="blob-code blob-code-inner js-file-line">				child <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>( <span class="pl-smi">c</span>.<span class="pl-smi">cssChildRow</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span> ),</td>
      </tr>
      <tr>
        <td id="L2701" class="blob-num js-line-number" data-line-number="2701"></td>
        <td id="LC2701" class="blob-code blob-code-inner js-file-line">				$tbodies <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>.<span class="pl-c1">add</span>( <span class="pl-en">$</span>( <span class="pl-smi">c</span>.<span class="pl-smi">namespace</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_extra_table<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tbody:not(.<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">c</span>.<span class="pl-smi">cssInfoBlock</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span> ) );</td>
      </tr>
      <tr>
        <td id="L2702" class="blob-num js-line-number" data-line-number="2702"></td>
        <td id="LC2702" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( tbodyIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; tbodyIndex <span class="pl-k">&lt;</span> <span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span>; tbodyIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2703" class="blob-num js-line-number" data-line-number="2703"></td>
        <td id="LC2703" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// loop through the visible rows</span></td>
      </tr>
      <tr>
        <td id="L2704" class="blob-num js-line-number" data-line-number="2704"></td>
        <td id="LC2704" class="blob-code blob-code-inner js-file-line">				count <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L2705" class="blob-num js-line-number" data-line-number="2705"></td>
        <td id="LC2705" class="blob-code blob-code-inner js-file-line">				$visibleRows <span class="pl-k">=</span> <span class="pl-smi">$tbodies</span>.<span class="pl-en">eq</span>( tbodyIndex ).<span class="pl-en">children</span>( <span class="pl-s"><span class="pl-pds">&#39;</span>tr:visible<span class="pl-pds">&#39;</span></span> ).<span class="pl-en">not</span>( <span class="pl-smi">c</span>.<span class="pl-smi">selectorRemove</span> );</td>
      </tr>
      <tr>
        <td id="L2706" class="blob-num js-line-number" data-line-number="2706"></td>
        <td id="LC2706" class="blob-code blob-code-inner js-file-line">				len <span class="pl-k">=</span> <span class="pl-smi">$visibleRows</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L2707" class="blob-num js-line-number" data-line-number="2707"></td>
        <td id="LC2707" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> ( rowIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; rowIndex <span class="pl-k">&lt;</span> len; rowIndex<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L2708" class="blob-num js-line-number" data-line-number="2708"></td>
        <td id="LC2708" class="blob-code blob-code-inner js-file-line">					$row <span class="pl-k">=</span> <span class="pl-smi">$visibleRows</span>.<span class="pl-en">eq</span>( rowIndex );</td>
      </tr>
      <tr>
        <td id="L2709" class="blob-num js-line-number" data-line-number="2709"></td>
        <td id="LC2709" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// style child rows the same way the parent row was styled</span></td>
      </tr>
      <tr>
        <td id="L2710" class="blob-num js-line-number" data-line-number="2710"></td>
        <td id="LC2710" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> ( <span class="pl-k">!</span><span class="pl-smi">child</span>.<span class="pl-c1">test</span>( $row[ <span class="pl-c1">0</span> ].<span class="pl-c1">className</span> ) ) { count<span class="pl-k">++</span>; }</td>
      </tr>
      <tr>
        <td id="L2711" class="blob-num js-line-number" data-line-number="2711"></td>
        <td id="LC2711" class="blob-code blob-code-inner js-file-line">					isEven <span class="pl-k">=</span> ( count <span class="pl-k">%</span> <span class="pl-c1">2</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> );</td>
      </tr>
      <tr>
        <td id="L2712" class="blob-num js-line-number" data-line-number="2712"></td>
        <td id="LC2712" class="blob-code blob-code-inner js-file-line">					$row</td>
      </tr>
      <tr>
        <td id="L2713" class="blob-num js-line-number" data-line-number="2713"></td>
        <td id="LC2713" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">removeClass</span>( <span class="pl-smi">wo</span>.<span class="pl-smi">zebra</span>[ isEven <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span> ] )</td>
      </tr>
      <tr>
        <td id="L2714" class="blob-num js-line-number" data-line-number="2714"></td>
        <td id="LC2714" class="blob-code blob-code-inner js-file-line">						.<span class="pl-en">addClass</span>( <span class="pl-smi">wo</span>.<span class="pl-smi">zebra</span>[ isEven <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">1</span> ] );</td>
      </tr>
      <tr>
        <td id="L2715" class="blob-num js-line-number" data-line-number="2715"></td>
        <td id="LC2715" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L2716" class="blob-num js-line-number" data-line-number="2716"></td>
        <td id="LC2716" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2717" class="blob-num js-line-number" data-line-number="2717"></td>
        <td id="LC2717" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L2718" class="blob-num js-line-number" data-line-number="2718"></td>
        <td id="LC2718" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">remove</span> <span class="pl-k">:</span> <span class="pl-k">function</span>( <span class="pl-smi">table</span>, <span class="pl-smi">c</span>, <span class="pl-smi">wo</span>, <span class="pl-smi">refreshing</span> ) {</td>
      </tr>
      <tr>
        <td id="L2719" class="blob-num js-line-number" data-line-number="2719"></td>
        <td id="LC2719" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( refreshing ) { <span class="pl-k">return</span>; }</td>
      </tr>
      <tr>
        <td id="L2720" class="blob-num js-line-number" data-line-number="2720"></td>
        <td id="LC2720" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> tbodyIndex, $tbody,</td>
      </tr>
      <tr>
        <td id="L2721" class="blob-num js-line-number" data-line-number="2721"></td>
        <td id="LC2721" class="blob-code blob-code-inner js-file-line">				$tbodies <span class="pl-k">=</span> <span class="pl-smi">c</span>.<span class="pl-smi">$tbodies</span>,</td>
      </tr>
      <tr>
        <td id="L2722" class="blob-num js-line-number" data-line-number="2722"></td>
        <td id="LC2722" class="blob-code blob-code-inner js-file-line">				toRemove <span class="pl-k">=</span> ( <span class="pl-smi">wo</span>.<span class="pl-smi">zebra</span> <span class="pl-k">||</span> [ <span class="pl-s"><span class="pl-pds">&#39;</span>even<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>odd<span class="pl-pds">&#39;</span></span> ] ).<span class="pl-c1">join</span>( <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> );</td>
      </tr>
      <tr>
        <td id="L2723" class="blob-num js-line-number" data-line-number="2723"></td>
        <td id="LC2723" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> ( tbodyIndex <span class="pl-k">=</span> <span class="pl-c1">0</span>; tbodyIndex <span class="pl-k">&lt;</span> <span class="pl-smi">$tbodies</span>.<span class="pl-c1">length</span>; tbodyIndex<span class="pl-k">++</span> ){</td>
      </tr>
      <tr>
        <td id="L2724" class="blob-num js-line-number" data-line-number="2724"></td>
        <td id="LC2724" class="blob-code blob-code-inner js-file-line">				$tbody <span class="pl-k">=</span> <span class="pl-smi">ts</span>.<span class="pl-en">processTbody</span>( table, <span class="pl-smi">$tbodies</span>.<span class="pl-en">eq</span>( tbodyIndex ), <span class="pl-c1">true</span> ); <span class="pl-c">// remove tbody</span></td>
      </tr>
      <tr>
        <td id="L2725" class="blob-num js-line-number" data-line-number="2725"></td>
        <td id="LC2725" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">$tbody</span>.<span class="pl-en">children</span>().<span class="pl-en">removeClass</span>( toRemove );</td>
      </tr>
      <tr>
        <td id="L2726" class="blob-num js-line-number" data-line-number="2726"></td>
        <td id="LC2726" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">ts</span>.<span class="pl-en">processTbody</span>( table, $tbody, <span class="pl-c1">false</span> ); <span class="pl-c">// restore tbody</span></td>
      </tr>
      <tr>
        <td id="L2727" class="blob-num js-line-number" data-line-number="2727"></td>
        <td id="LC2727" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L2728" class="blob-num js-line-number" data-line-number="2728"></td>
        <td id="LC2728" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L2729" class="blob-num js-line-number" data-line-number="2729"></td>
        <td id="LC2729" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L2730" class="blob-num js-line-number" data-line-number="2730"></td>
        <td id="LC2730" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L2731" class="blob-num js-line-number" data-line-number="2731"></td>
        <td id="LC2731" class="blob-code blob-code-inner js-file-line">})( jQuery );</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.16867s from github-fe130-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-XLbxxvkhG/7tO/x1ltihs8X0u4QdUxhkWgqv/0i1sz0=" src="https://assets-cdn.github.com/assets/frameworks-5cb6f1c6f9211bfeed3bfc7596d8a1b3c5f4bb841d5318645a0aafff48b5b33d.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-TSo1b0Qw+Jbip19VbIdvMOvPy9HpJ1Dkg8MVW9Z0eog=" src="https://assets-cdn.github.com/assets/github-4d2a356f4430f896e2a75f556c876f30ebcfcbd1e92750e483c3155bd6747a88.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

