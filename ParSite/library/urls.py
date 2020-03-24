from rest_framework import routers
from .api import LibViewset

router = routers.DefaultRouter()
router.register('api/lib', LibViewset, 'lib')

urlpatterns = router.urls